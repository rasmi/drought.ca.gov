// Example of this JSON: https://cdec.water.ca.gov/snowapp/services/statewide/swe
// See .github/workflows/fetch-drought-data.yml 
const conditions = require('./snowpackConditions.json');
const cheerio = require("cheerio");

// Get the latest entry from the data.
const [latestEntry] = conditions.swe
  .sort((a, b) => a.swcDate > b.swcDate)
  .slice(-1);

// Get the historic peak average.
const historicPeak = conditions.avg
  .find(a => a.month === 4 && a.day === 1);

// Render live-data-based values into the component via 11ty transform.
const renderSnowpackLevels = function (html) {
  // Find all instances of the component on the page.
  const components = html.matchAll(
    /<drought-snowpack-levels\s*[^>]*?\s*>[\s\S]*?<\/drought-snowpack-levels>/gm
  );

  let result = html;

  // Loop through all instances of the component on the page.
  for (component of components) {
    let { 0: originalMarkup, index } = component;
    let $ = cheerio.load(originalMarkup, null, false);

    // Get the data-unit attribute if available, set default if not.
    const unit = $("drought-snowpack-levels").data('unit') || "inches";
    $("drought-snowpack-levels").attr("data-unit", unit);

    $('#snowpack-data-table').append(`
      <tr id="snowpack-data" 
        data-current="${latestEntry.avgSwc.toFixed(1)}" 
        data-historic-peak="${historicPeak.avgAvgSwc.toFixed(1)}">
        <td class="snowpack-historic">${historicPeak.avgAvgSwc.toFixed(1)} ${unit}</td>
        <td class="snowpack-current">${latestEntry.avgSwc.toFixed(1)} ${unit}</td>
      </tr>
    `);

    // If this placeholder is present within the provided mark-up, fill it with value.
    if ($("#current-percentage").length) {
      $("#current-percentage").text(`${latestEntry.pctApr1}%`);
    }

    result = result.replace(originalMarkup, $.html());
  }

  return result;
};

module.exports = renderSnowpackLevels;