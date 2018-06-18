(function() {
  if (window.location.href.includes("product-t160") || window.location.href.includes("product-b90") || window.location.href.includes("product-t90")) {
    var calcBtn = document.querySelector('#calculator');

    calcBtn.addEventListener('click', startPopup);
    var body = document.querySelector('body');
    var calcDiv = document.querySelector('#calc-form-popup');
    var cancelBtn = document.querySelector('#calc-cancel-btn');
    var calcForm = document.querySelector('#calc-form');
    var calcResults = document.querySelector('#calc-results');
    var calcResultsShelves = document.querySelector('#calc-results-shelves');
    var calcResultsProductsPerShelf = document.querySelector('#calc-results-products-per-shelf');
    var calcResultsTotalProductCapacity = document.querySelector('#calc-results-total-product-capacity');
    var calcUnitSelector = document.querySelector('#calc-unit-selector');
    var unitsSection = document.querySelectorAll('.calc-unit');

    var currentUnits = "inches"


    calcForm.addEventListener('submit', calculate);
    calcUnitSelector.addEventListener('click', changeUnits);

    //SPACING

    const unitConst = {
      inches: {
      HEIGHT_SPACING: 0.5,
      WIDTH_SPACING: 0.5,
      DEPTH_SPACING: 0.5,
      
      // RACKS
      WIRE_RACK: 0.375,
      HEAVY_DUTY_WIRE_RACK: 0.75,
      NO_RACK: 0,
      // FREEZERS
      B_90_HEIGHT: 60,
      B_90_WIDTH: 31.5,
      B_90_DEPTH: 22.65,
  
      T_90_HEIGHT: 60,
      T_90_WIDTH: 34.5,
      T_90_DEPTH: 28,
  
      T_160_HEIGHT: 60,
      T_160_WIDTH: 34.5,
      T_160_DEPTH: 26.5
    },
    cm: {
      HEIGHT_SPACING: 0.5 * 2.54,
      WIDTH_SPACING: 0.5 * 2.54,
      DEPTH_SPACING: 0.5 * 2.54,
      
      // RACKS
      WIRE_RACK: 0.375 * 2.54,
      HEAVY_DUTY_WIRE_RACK: 0.75 * 2.54,
      NO_RACK: 0 * 2.54,
      // FREEZERS
      B_90_HEIGHT: 60 * 2.54,
      B_90_WIDTH: 31.5 * 2.54,
      B_90_DEPTH: 22.65 * 2.54,
  
      T_90_HEIGHT: 60 * 2.54,
      T_90_WIDTH: 34.5 * 2.54,
      T_90_DEPTH: 28 * 2.54,
  
      T_160_HEIGHT: 60 * 2.54,
      T_160_WIDTH: 34.5 * 2.54,
      T_160_DEPTH: 26.5 * 2.54
    }
  }

    function changeUnits(e) {
      currentUnits = e.target.checked ? "cm" : "inches"
      updateUnitText()
    }
    function updateUnitText() {
      unitsSection.forEach(function (val) {
        val.innerHTML = currentUnits;
      })
    }

    function startPopup(e) {
      e.preventDefault();
      calcDiv.classList.remove('hide-calc-form');
      cancelBtn.addEventListener('click', cancelCalc);
      window.location.hash = '';
      body.classList.toggle('stop-scrolling');
    }

    function cancelCalc(e) {
      e.preventDefault();
      calcResults.classList.add('hidden');
      calcDiv.classList.add('hide-calc-form');
      cancelBtn.removeEventListener('click', cancelCalc);
      body.classList.toggle('stop-scrolling');
    }

    function calculate(e) {
      e.preventDefault();
      calcResults.classList.remove('hidden');
      var height = parseFloat(document.getElementById('calc-height').value);
      var width = parseFloat(document.getElementById('calc-width').value);
      var depth = parseFloat(document.getElementById('calc-depth').value);

      var results;
      if (height === width) {
        results = calculateStorageSpace(height, width, depth);
      } else {
        var result1 = calculateStorageSpace(height, width, depth);
        var result2 = calculateStorageSpace(width, height, depth)
        if (result1.totalProductCapacity >= result2.totalProductCapacity) results = result1;
        else results = result2;
      }
      displayCalculationResults(results);
    }

    function calculateStorageSpace(height, width, depth) {

      var totalHeight = height + unitConst[currentUnits].HEAVY_DUTY_WIRE_RACK + unitConst[currentUnits].HEIGHT_SPACING;
      var shelfSpacing = Math.ceil(totalHeight * 2) / 2
      var totalWidth = width + unitConst[currentUnits].WIDTH_SPACING
      var totalDepth = depth + unitConst[currentUnits].DEPTH_SPACING
      var results;
      if (window.location.href.includes("product-t90")) {
        results = calculateTotals({height: unitConst[currentUnits].T_90_HEIGHT, width: unitConst[currentUnits].T_90_WIDTH, depth: unitConst[currentUnits].T_90_DEPTH}, shelfSpacing, totalWidth, totalDepth)
      } else if (window.location.href.includes("product-t160")) {
        results = calculateTotals({height: unitConst[currentUnits].T_160_HEIGHT, width: unitConst[currentUnits].T_160_WIDTH, depth: unitConst[currentUnits].T_160_DEPTH}, shelfSpacing, totalWidth, totalDepth)
      } else {
        results = calculateTotals({height: unitConst[currentUnits].B_90_HEIGHT, width: unitConst[currentUnits].B_90_WIDTH, depth: unitConst[currentUnits].B_90_DEPTH}, shelfSpacing, totalWidth, totalDepth)
      }
      return results;
    }

    function calculateTotals(freezer, shelfSpacing, totalWidth, totalDepth) {
      const shelves = Math.max(Math.floor(freezer.height / shelfSpacing), 1);
      const rowsWide = Math.max(Math.floor(freezer.width / totalWidth), 1);
      const rowsDeep = Math.max(Math.floor(freezer.depth / totalDepth), 1);
      const productsPerShelf = rowsWide * rowsDeep;
      const totalProductCapacity = shelves * productsPerShelf;
      return {shelves, productsPerShelf, totalProductCapacity}
    }

    function displayCalculationResults(results) {
      calcResultsShelves.innerHTML = results.shelves;
      calcResultsProductsPerShelf.innerHTML = results.productsPerShelf;
      calcResultsTotalProductCapacity.innerHTML = results.totalProductCapacity;
    }
  }
})();
