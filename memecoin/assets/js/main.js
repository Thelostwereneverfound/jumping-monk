AOS.init();

document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".header_area").classList.toggle("active");
}); // Toggle Menu

document.querySelector("#cpyBtn").onclick = () => {
    const inputField = document.querySelector(".cpy-text").value;
    navigator.clipboard.writeText(inputField);
    document.querySelector(".address").classList.add("active");
    document.querySelector(".cpy-status").innerHTML = "Copied!:" + " ";
}; // Text copy 

document.querySelectorAll('.nav-link').forEach(navLink => {
    navLink.onclick = () => {
        document.querySelector(".header_area").classList.remove("active");
    }
}); // remove active class from Header if user click on navLink 


// # ============ FUll screen video Toggle ===========

document.querySelector(".full-scrn-ext-btn").onclick = () => {
    document.querySelector("#about").classList.remove("active");
    document.querySelector('.body').classList.remove("unactive");
}; // Exit full screen
document.querySelector(".vid-ply-btn").onclick = () => {
    document.querySelector("#about").classList.add("active");
    document.querySelector('.body').classList.add("unactive");
}; // Enter full screen

const fullScreenVideo = document.querySelector(".full-scrn-vid");
const fullScreenVideoWrap = document.querySelector(".full-scrn-vid-wrap");

fullScreenVideoWrap.addEventListener("click", function (event) {
    document.querySelector("#about").classList.remove("active");
    document.querySelector('.body').classList.remove("unactive");
    event.stopPropagation();
}); // Exit full screen if user click outside 
fullScreenVideo.addEventListener("click", function (event) {
    event.stopPropagation();
});  // Stay exploring if user click inside


let CTRP = document.querySelector('.CTRP-wrap');
let CTRP_contents = document.querySelector('.CTRP-contents-wrap');

document.querySelector(".CTRP-btn").onclick = () => {
    document.querySelector(".CTRP-wrap").classList.add("active");
    document.querySelector('.body').classList.add("unactive");
}; // Enter full screen

document.querySelector("#checkmark").onclick = () => {
    document.querySelector(".CTRP-wrap").classList.remove("active");
    document.querySelector('.body').classList.remove("unactive");
}; // Exit full screen

CTRP.addEventListener("click", function (event) {
    CTRP.classList.remove("active");
    document.querySelector('.body').classList.remove("unactive");
    event.stopPropagation();
}); //  Exit if click outside

CTRP_contents.addEventListener("click", function (event) {
    event.stopPropagation();
});



const prcsNav = document.querySelector('.prcs-nav');
const prcsStpIdx = document.querySelector('.prcs-stp-idx');
const prcsTitle = document.querySelector('.prcs-title');
const prcsDescription = document.querySelector('.description.prcs');
const prcsNext2 = document.querySelector('.prcsNext');

const stepsData = [
    {
        title: "Load your wallet with Sol:",
        description: "You need Solana (SOL) in your wallet to purchase $JMP, so please ensure your wallet is loaded with Solana before proceeding."
    },
    {
        title: "Launch Raydium:",
        description: "Open Raydium using the official link: https://raydium.io/, then locate the section for token swaps or trades. Paste the $JMP contract address into the appropriate field to ensure you're selecting the correct token, and confirm that the address matches the official $JMP contract to avoid any errors."
    },
    {
        title: "SET SLIPPAGE:",
        description: "Before you proceed with swapping tokens on Raydium, make sure to adjust the slippage settings to an appropriate level. Setting the correct slippage is crucial to avoid issues such as being front-run by other traders (MEV attacks). Typically, you can find the slippage setting option in the swap interface. Adjust it to a value that accommodates potential price fluctuations and ensures your transaction goes through smoothly."
    },
    {
        title: "Swap tokens:",
        description: "After adjusting the slippage settings, you can now proceed with the swap. Enter the amount of Solana (SOL) you wish to trade and select Jumping Monk ($JMP) as the token you want to receive. Confirm the details of your transaction and execute the swap. This will convert your SOL into Jumping Monk, completing your purchase. Ensure that you review all the transaction details carefully before finalizing to make sure everything is accurate."
    },
    {
        title: "Locate your tokens in your wallet:",
        description: "Once the swap is completed, the Jumping Monk ($JMP) tokens will be deposited into your wallet. You should see the tokens reflected in your wallet balance shortly thereafter. If you don't see the $JMP tokens immediately, try refreshing your wallet or checking the transaction history to confirm that the tokens have been successfully added."
    }
]; // How to Buy Process 

let currentStepIndex = 0; // Initialize current step index

function updateStepContent(index) {
    prcsStpIdx.textContent = index + 1;
    prcsTitle.innerHTML = stepsData[index].title;
    prcsDescription.innerHTML = stepsData[index].description;
}

// Initialize steps
for (let i = 0; i < stepsData.length; i++) {
    let prcsLi = document.createElement("li");
    prcsLi.classList.add("prcs-step");
    prcsNav.appendChild(prcsLi);

    prcsLi.addEventListener("click", function () {
        document.querySelectorAll(".prcs-step").forEach(item => {
            item.classList.remove("active");
        });
        prcsLi.classList.add("active");
        currentStepIndex = i; // Update current step index
        updateStepContent(i);
    });
}

// Initial content setup
updateStepContent(0);
prcsNav.children[0].classList.add("active");

// Button click handler
if (prcsNext2) {
    prcsNext2.addEventListener("click", function () {
        currentStepIndex = (currentStepIndex + 1) % stepsData.length;

        // Update active step in navigation
        document.querySelectorAll(".prcs-step").forEach(item => {
            item.classList.remove("active");
        });
        prcsNav.children[currentStepIndex].classList.add("active");
        updateStepContent(currentStepIndex);
    });

}



document.querySelectorAll('.faq').forEach(faq => {
    faq.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('active');
    });
}); //  FAQ Q & A Toggler



// # Chart Control

Chart.register(ChartDataLabels);

const ctx = document.getElementById('myPieChart').getContext('2d');
const data = {
    datasets: [{
        data: [50, 25, 16, 10],
        backgroundColor: [
            'rgba(121, 204, 158, 1)',
            'rgba(255, 135, 23, 1)',
            'rgba(226, 254, 165, 1)',
            'rgba(248, 255, 232, 1)'
        ],
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 4
    }]
};

const options = {
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: true // Set to true to enable tooltips on hover
        },
        datalabels: {
            display: false
        }
    },
    cutout: '32%',
    responsive: true,
    maintainAspectRatio: false,
};

Chart.register(ChartDataLabels);

const myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});








