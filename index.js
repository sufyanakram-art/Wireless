// Variables to track the charging progress and cost
let chargingPercentageSlot1 = 0;
let chargingPercentageSlot2 = 0;
let chargingCostSlot1 = 0;
let chargingCostSlot2 = 0;

// Price per percentage of battery charge in PKR
const costPerPercentage = 80; // ₨ per 1% of charging

// Function to start charging for Slot 1
function startCharging(slot) {
    if (slot === 1) {
        let chargeButton = document.querySelector("#slot1 button");
        let payButton = document.querySelector("#slot1 .pay-now-btn");

        chargeButton.disabled = true;
        payButton.style.display = "inline-block";

        // Simulate charging process
        let interval = setInterval(() => {
            if (chargingPercentageSlot1 < 100) {
                chargingPercentageSlot1++;
                chargingCostSlot1 = chargingPercentageSlot1 * costPerPercentage;
                document.querySelector("#slot1 .percentage").textContent = "Charging: " + chargingPercentageSlot1 + "%";
                document.querySelector("#slot1 .cost").textContent = "Cost: ₨" + chargingCostSlot1;
            } else {
                clearInterval(interval);
            }
        }, 1000); // Update every second
    }

    if (slot === 2) {
        let chargeButton = document.querySelector("#slot2 button");
        let payButton = document.querySelector("#slot2 .pay-now-btn");

        chargeButton.disabled = true;
        payButton.style.display = "inline-block";

        // Simulate charging process
        let interval = setInterval(() => {
            if (chargingPercentageSlot2 < 100) {
                chargingPercentageSlot2++;
                chargingCostSlot2 = chargingPercentageSlot2 * costPerPercentage;
                document.querySelector("#slot2 .percentage").textContent = "Charging: " + chargingPercentageSlot2 + "%";
                document.querySelector("#slot2 .cost").textContent = "Cost: ₨" + chargingCostSlot2;
            } else {
                clearInterval(interval);
            }
        }, 1000); // Update every second
    }
}

// Function to process payment
function payForCharging(slot) {
    if (slot === 1) {
        alert("You have paid ₨" + chargingCostSlot1 + " for Slot 1.");
        resetSlot(1);
    }

    if (slot === 2) {
        alert("You have paid ₨" + chargingCostSlot2 + " for Slot 2.");
        resetSlot(2);
    }
}

// Function to reset the slot after payment
function resetSlot(slot) {
    if (slot === 1) {
        chargingPercentageSlot1 = 0;
        chargingCostSlot1 = 0;
        document.querySelector("#slot1 .status").textContent = "Available";
        document.querySelector("#slot1 .percentage").textContent = "Charging: 0%";
        document.querySelector("#slot1 .cost").textContent = "Cost: ₨0.00";
        document.querySelector("#slot1 .pay-now-btn").style.display = "none";
        document.querySelector("#slot1 button").disabled = false;
    }

    if (slot === 2) {
        chargingPercentageSlot2 = 0;
        chargingCostSlot2 = 0;
        document.querySelector("#slot2 .status").textContent = "Available";
        document.querySelector("#slot2 .percentage").textContent = "Charging: 0%";
        document.querySelector("#slot2 .cost").textContent = "Cost: ₨0.00";
        document.querySelector("#slot2 .pay-now-btn").style.display = "none";
        document.querySelector("#slot2 button").disabled = false;
    }
}

// Add event listeners for Pay Now buttons
document.querySelector("#slot1 .pay-now-btn").addEventListener("click", () => payForCharging(1));
document.querySelector("#slot2 .pay-now-btn").addEventListener("click", () => payForCharging(2));
