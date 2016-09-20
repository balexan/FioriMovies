sap.ui.define([
		"movies/sap/com/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("YEAR").length, 1, "The sorting by YEAR returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("TITLE").length, 1, "The sorting by TITLE returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("YEAR").length, 1, "The group by YEAR returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to YEAR if the user groupes by YEAR", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("YEAR");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "YEAR", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by TITLE and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "YEAR");

		this.oGroupSortState.sort("TITLE");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});