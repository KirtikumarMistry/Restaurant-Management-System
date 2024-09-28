const mongoose = require('mongoose');

// Define the schema for ordered items
const OrderedItemSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity cannot be less than 1'],
    },
    Price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative'],
    },
});

// Define the schema for the order
const OrderSchema = new mongoose.Schema({
    Table_Number: {
        type: Number,  // Use Number if table number is numeric
        required: true,
    },
    Items_Ordered: [OrderedItemSchema],  // Embed the OrderedItem schema
    Total_Amount: {
        type: Number,
        default: 0,  // Can be auto-calculated based on Items_Ordered if needed
    },
    Total_Quantity: {
        type: Number,
        default: 0,  // Auto-calculated based on Items_Ordered quantities
    },
    Created_At: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });  // Enable automatic createdAt and updatedAt fields

// Pre-save hook to calculate total amount and quantity
OrderSchema.pre('save', function (next) {
    // Calculate total amount and total quantity based on items ordered
    let totalAmount = 0;
    let totalQuantity = 0;

    this.Items_Ordered.forEach((item) => {
        totalAmount += item.Price * item.Quantity;
        totalQuantity += item.Quantity;
    });

    this.Total_Amount = totalAmount;
    this.Total_Quantity = totalQuantity;

    next();
});

// Export the model
module.exports = mongoose.model("Orders", OrderSchema);
