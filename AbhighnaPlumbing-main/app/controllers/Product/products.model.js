class Product {
    constructor(productID, name, supplierID, categoryID, subCategoryID, unitPrice, oldPrice, discount, unitInStock, productAvailable, shortDescription, picturePath, note, createdBy, createdOn, modifiedBy, modifiedOn) {
        this.productID = productID;
        this.name = name;
        this.supplierID = supplierID;
        this.categoryID = categoryID;
        this.subCategoryID = subCategoryID;
        this.unitPrice = unitPrice;
        this.oldPrice = oldPrice;
        this.discount = discount;
        this.unitInStock = unitInStock;
        this.productAvailable = productAvailable;
        this.shortDescription = shortDescription;
        this.picturePath = picturePath;
        this.note = note;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
        this.modifiedBy = modifiedBy;
        this.modifiedOn = modifiedOn;
    }

    // Optional: Add any method to process or format data
    getDiscountedPrice() {
        if (this.discount && this.unitPrice) {
            return this.unitPrice - (this.unitPrice * (this.discount / 100));
        }
        return this.unitPrice;
    }

    // You can add more methods for validations, formatting, etc.
}

module.exports = Product;
