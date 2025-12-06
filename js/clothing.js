// Prevent multiple executions
if (typeof window.clothingLoaded === 'undefined') {
    window.clothingLoaded = true;
    
    const clothingItems = [
        "casual neon torso",
        "Abibas suit",
        "Air Bior pullover sweater",
        "Alaska winter jacket",
        "Alvin Lein T-shirt",
        "Anti Social Club hoodie",
        "Arm Pangel jacket",
        "Bendi T-shirt",
        "black jacket with yellow trim",
        "blob longsleeve top",
        "bomber jacket with glowing elements",
        "branded CDG T-shirt",
        "branded colourful T-shirt",
        "branded insulated hoodie",
        "branded longsleeve top",
        "branded Molo T-shirt",
        "branded monochrome T-shirt",
        "branded T-shirt",
        "bright hoodie",
        "bright StarWars hoodie",
        "CAP T-shirt",
        "classic denim jacket",
        "collection 2022 T-shirt",
        "cropp collection T-shirt",
        "denim jacket",
        "exclusive T-shirt",
        "fur coat without a hood",
        "gothic hoodie with neon eyes",
        "Grand RP collection hoodie",
        "Grand RP collection T-shirt",
        "Hilipp Lein T-shirt",
        "hoodie with balaclava Cap",
        "jacket",
        "jacket with a hood",
        "jacket with blue luminous trim",
        "jacket with green luminous trim",
        "jacket with pink luminous trim",
        "jacket with red luminous trim",
        "jacket with T-shirt",
        "jacket with turquoise luminous trim",
        "jacket with white luminous trim",
        "Juice Wrld Vlone T-shirt",
        "Khampion T-shirt",
        "Khanel top",
        "Kupreme T-shirt",
        "Lacoste T-shirt",
        "Lui Vi jacket",
        "Lui Vi sweatshirt",
        "Lui Vi T-shirt",
        "Lui Vi top",
        "luminous LM Playboy jacket",
        "luminous LM Playboy T-shirt",
        "luminous LM Playboy top",
        "luminous T-shirt",
        "maliky hoodie",
        "maliky T-shirt",
        "Mickey Mouse T-shirt",
        "Mikachu hoodie",
        "mix collection T-shirt",
        "Muci hoodie",
        "Muci hoodie with a snake",
        "Muci Not Fake hoodie",
        "Muci sweatshirt",
        "Mupreme T-shirt",
        "N.E.S.A. T-shirt",
        "neon torso",
        "New Years Eve costume",
        "Niki new collection hoodie",
        "Niki tech top",
        "Niki track suit top",
        "one-colour CAP T-shirt",
        "open olympics top",
        "Plain jacket with sweater",
        "Polo Kinder T-shirt",
        "Rick and Morty trendy jacket",
        "scary turtleneck T-shirt",
        "shirt new",
        "Simpsons T-shirt",
        "skinny jacket",
        "Ston Islan classic sports jacket",
        "summer collection T-shirt",
        "sweatshirt",
        "swimming trunks",
        "T-shirt",
        "tapered classic turtleneck",
        "The West Pace jacket",
        "top",
        "trendy jacket",
        "Tron torso",
        "TSUM collection 3 T-shirt",
        "TSUM collection T-shirt",
        "Up-Green sweatshirt",
        "Valenciaga T-shirt",
        "VIN T-shirt",
        "vintage Abibas Olympic jersey",
        "wedding dress",
        "wide print soccer T-shirt ",
        "wide printed football T-shirt ",
        "bandana top",
        "Barberry corset dress",
        "body wraps kill top",
        "bomber jacket with luminous elements",
        "calligraphy dress",
        "collection 5 top",
        "corset top",
        "Amire zip-up jumper",
        "asymmetrical austere dress",
        "day dress",
        "dress",
        "dress with cutout",
        "Essential suit top",
        "faution top",
        "Kupreme dress",
        "long branded T-shirt",
        "Love costume",
        "low dress",
        "luminous dress",
        "luminous LM Playboy sweatshirt",
        "Mikachu T-shirt",
        "motorcycle platform boots",
        "pullover with long sleeve",
        "short pullover",
        "sports top",
        "Spring Set",
        "stylish suit",
        "summer bra",
        "summer top",
        "top 2 outerwear",
        "top with chains",
        "topic pok",
        "Watch Me sweater",
        "winter collection dress",
        "Abibas pants",
        "Abibas sport pants",
        "Abibas sweatpants",
        "Alvin Lein pants",
        "belted pants",
        "Bersace trousers",
        "Bior pants",
        "branded pants with bunny detail",
        "bright StarWars trousers",
        "bright trousers",
        "colored pants",
        "denim shorts",
        "Essential pants",
        "Grand RP collection pants",
        "half-glowing pants",
        "insulated personal pants",
        "Khampion pants",
        "Khanel pants",
        "Lui Vi jeans",
        "Lui Vi pants",
        "Lui Vi shorts",
        "luminous Bendi pants",
        "luminous branded pants with bunny detail",
        "luminous Grand RP trousers",
        "luminous LM Playboy trousers",
        "luminous OFF pants",
        "luminous trousers",
        "LW new sample branded neon pants",
        "Mickey Mouse pants",
        "Muci pants",
        "Muci trousers",
        "Murberry pants",
        "N.E.S.A. pants",
        "neon Lui Vi pants",
        "neon pants",
        "New Balance trousers",
        "new fashionable joggers",
        "Niki new collection pants",
        "Niki tech fleece pants",
        "Niki track suit pants",
        "old summer shorts",
        "pants",
        "pants split",
        "shorts",
        "skater jeans",
        "spider pants",
        "Ston Islan classic sport pants",
        "Ston Islan pants",
        "summer voyage shorts",
        "swordmen pants",
        "Tron pants",
        "trousers",
        "Valenciaga pants",
        "wide brand pants",
        "zipper pants",
        "Abibas leggings",
        "belted pants",
        "Gussi shorts",
        "jeans",
        "Muci shorts",
        "Nik shorts with leggings",
        "Panel pants",
        "pants with belt",
        "ragged jeans",
        "ripped pants with neon strips",
        "S cargo pants",
        "skirt",
        "skirt with tights",
        "Abibas Keezy Foam shoes",
        "Abibas Marquee Boost Lows shoes",
        "Abibas Pezy Boost 700 V3 Alvah shoes",
        "Abibas Pro Bounce 2019 Lows shoes",
        "Acic Gel Kayano sneakers",
        "Alastor McQueen oversized shoes",
        "Bans sneakers ",
        "checkered Pans sneakers",
        "Curry Flow 8 sneakers",
        "Ground Mordan 4 Retro Laser 30th shoes",
        "Keezy Boost shoes",
        "luminous shoes",
        "modern heeled boots",
        "Mordan 1 shoes",
        "Mordan 6 shoes",
        "Muci branded flip-flops",
        "multi-colored Pans sneakers",
        "neon shoes",
        "Nik Huarache shoes",
        "Niki Ground Porce One new collection shoes",
        "Niki Shox shoes",
        "Niki Uptempo shoes",
        "Niki Zoom Freak 1 Multi-Color shoes",
        "Pans sneakers",
        "Pezy Boost shoes",
        "red sneakers",
        "RGB neon shoes",
        "Rick Ownis X Dr. Martian boots",
        "Rocs",
        "Rocs with neon paint",
        "shoes",
        "sneakers",
        "sneakers with neon spikes",
        "trainers",
        "Tron shoes",
        "Up-Green Keezy Boost shoes",
        "Up-Green Pezy Boost shoes",
        "Valenciaga Track shoes",
        "womens denim heeled boots",
        "sporty boots",
        "tall boots",
        "accessory",
        "AK-47 chain",
        "black voron shoulder accessory",
        "boxing gloves",
        "bracelet",
        "chain",
        "chain around the body accessory",
        "chain lost treasure neon accessory",
        "chain with star pendant",
        "clown chain",
        "deer antler accessory",
        "deer antlers with a red nose accessory",
        "eagle necklace",
        "el primo corazon krawl on the shoulder accessory",
        "fluorescent cat ears",
        "flying bear on the shoulder accessory",
        "glasses with glowing snow",
        "gloves",
        "glowing nails",
        "Grand chain",
        "hamster on the shoulder accessory",
        "hearts Pride glasses",
        "leon krawl on the shoulder accessory",
        "lovely bird egg on the shoulder accessory",
        "neck scarf accessory",
        "necklace",
        "neon rabbit ears",
        "owl on the shoulder accessory",
        "pixel glasses",
        "satanic wings",
        "scarf",
        "shiny deer antler headband accessory",
        "six-tailed fox on the shoulder accessory",
        "snake around the body accessory",
        "snowflake glasses",
        "strong chicken on the shoulder accessory",
        "tie",
        "toothless dragon on the shoulder accessory",
        "wristband accessory",
        "beads accessory",
        "fluorescent cat ears",
        "navel piercing accessory",
        "onelove chain",
        "alien with neon eyes mask",
        "anime mask",
        "assassins mask",
        "bandana mask",
        "baseball mask",
        "Bigness mask",
        "boxing helmet",
        "carnival mask",
        "casual neon helmet",
        "cat mask",
        "Christmas tree mask",
        "clown mask",
        "cowgirl hat",
        "Craft Munk mask",
        "Cupids crown",
        "demon mask",
        "desert scarf mask",
        "devil mask",
        "earphones with a heart",
        "emoji mask",
        "evil mask",
        "exotic mask",
        "fashionista scarf mask",
        "fox mask",
        "glowing face scarf mask",
        "gorilla mask",
        "handkerchief mask",
        "Jason blue mask",
        "Kazer headphones",
        "kitsune mask",
        "luminous head bag mask",
        "luminous LM Playboy mask",
        "mask",
        "Mask Broken",
        "mask made of clips on a chain",
        "monkey boss mask",
        "monkey mask",
        "neon horns with spikes",
        "Nik mask",
        "owl mask",
        "panama hat",
        "penguin mask",
        "pig mask",
        "pot and pan headwear",
        "purge mask",
        "raccoon mask",
        "raptor mask",
        "raven mask",
        "red stocking mask",
        "reindeer mask",
        "robot human mask",
        "robot mask",
        "rooster mask",
        "samurai mask",
        "Santa Claus mask",
        "saruko neon mask",
        "Sashmello mask",
        "shamanic mask",
        "skeleton king mask",
        "snowboarders mask",
        "snowflake glasses",
        "snowman mask",
        "spiked toxic mask",
        "sports mask",
        "stealthy mask",
        "tied scarf mask",
        "tight mask",
        "toothy mask",
        "trending shark head hat",
        "Tron helmet",
        "turkey mask",
        "TV-head mask",
        "white Lui Vi desert scarf mask with multi-colored top",
        "branded headband",
        "earrings",
        "rabbit ears",
        "gold Kolex watch with black dial",
        "gold Kolex watch with rainbow bezels",
        "Kasio G-Shock watch",
        "Kolex 2 watch",
        "Kolex watch",
        "silver Kolex watch with rainbow bezels",
        "Volex 2 watch",
        "Volex watch",
        "Alvin Lein backpack skin",
        "backpack skin",
        "backpack with a cat skin",
        "backpack with case skin",
        "bear backpack skin",
        "biohazard backpack skin",
        "Bior backpack skin",
        "bitkin handbag skin",
        "capsule backpack skin",
        "chain with spikes backpack skin",
        "classic Lui Vi backpack skin",
        "classic military backpack skin",
        "cloud backpack skin",
        "Coffin backpack skin",
        "cow backpack skin",
        "cross backpack skin",
        "cute bear backpack skin",
        "demon backpack skin",
        "Domo backpack skin",
        "double pockets backpack skin",
        "duck backpack skin",
        "duffel bag skin",
        "fancy bear backpack skin",
        "G backpack skin",
        "gauard bag with ladudu skin",
        "gloomy bear backpack skin",
        "handbag backpack skin",
        "heart backpack skin",
        "heart with wings backpack skin",
        "hippy bear backpack skin",
        "human backpack skin",
        "jolly bear backpack skin",
        "kawaii rabbit bunny fabric backpack skin",
        "Kupreme backpack skin",
        "leather Ghostface shoulder bag skin",
        "leather school backpack skin",
        "Lui Vi backpack skin",
        "Lui Vi shoulder backpack skin",
        "LUV backpack with wings skin",
        "LV backpack with water prints",
        "memo bag with ladudu skin",
        "Mickeys Christmas backpack skin",
        "mini-bear backpack skin",
        "Muci backpack skin",
        "neon chrome handbag skin",
        "Niki backpack skin",
        "piggy keychain backpack skin",
        "plaid bunny backpack skin",
        "sad hare backpack skin",
        "scary chicken backpack skin",
        "shark backpack skin",
        "skeleton cat backpack skin skin",
        "skeleton cheetah plush backpack skin",
        "skull backpack skin",
        "small sup bag skin",
        "SSC kit bag skin",
        "star bunny backpack skin",
        "strawberry backpack skin",
        "valentines cat backpack skin",
        "Venom backpack skin",
        "Alvin Lein set",
        "Bersace set",
        "bright StarWars set",
        "Grada set ",
        "Grand RP collection set",
        "Khampion set",
        "Khanel set",
        "Kupreme set",
        "Lui Vi set",
        "luminous Bendi set",
        "luminous LM Playboy set",
        "luminous LW bomber set",
        "luminous OFF set",
        "LW new sample branded neon pants set",
        "Niki new collection set",
        "Tron set",
        "Valenciaga set",
    ];


const clothingColors = ["luminous", "red", "blue", "green", "black", "white", "yellow", "purple", "orange", "pink", "gray"];
const clothingTypes = Array.from({ length: 30 }, (_, i) => `type ${i + 1}`);
const clothingGenders = ["", "for men", "for women"];


class ClothingForm {
    constructor() {
        this.state = {
            type: 'Buying', // Default transaction type
            isTrading: false,
            items: [{}, {}, {}], // Array of objects to hold item details
            activeItemCount: 1,
            useInBulk: false,
            useRespectively: false
        };

        try {
            this.initializeElements();
            this.attachEventListeners();
            this.updateUI(); // Initial UI update
            this.updatePreview(); // Initial preview update
        } catch (error) {
            console.error('Error initializing ClothingForm:', error);
        }
    }

    initializeElements() {
        try {
            this.form = document.getElementById('clothingForm');
            this.clothingItemsContainer = document.getElementById('clothingItemsContainer');
            this.clothingPricesContainer = document.getElementById('clothingPricesContainer');
            this.clothingOutput = document.getElementById('clothing-output');
            this.clothingItemCount = document.getElementById('clothingItemCount');
            this.clothingItemsTitle = document.getElementById('clothingItemsTitle');
            this.clothingRespectivelyCheck = document.getElementById('clothingRespectivelyCheck');
            this.clothingItemControls = document.getElementById('clothingItemControls');
            this.clothingInBulkInput = document.getElementById('clothingInBulkOption');
            this.clothingInBulkLabel = document.querySelector('label[for="clothingInBulkOption"]');
            this.clothingTradingCheckbox = document.getElementById('clothing-trading');
            this.addClothingItemBtn = document.getElementById('addClothingItem');
            this.removeClothingItemBtn = document.getElementById('removeClothingItem');
            this.clothingSubmitBtn = document.getElementById('clothing-submit-btn');
            this.clothingCopyBtn = document.getElementById('clothing-copy-btn');
            
            // Check if essential elements exist
            if (!this.clothingItemsContainer || !this.clothingPricesContainer || !this.clothingOutput) {
                console.error('Essential clothing form elements not found');
                return;
            }
        } catch (error) {
            console.error('Error in initializeElements:', error);
        }
    }

    attachEventListeners() {
        // Transaction Type Radio Buttons (handled by inline script, listen for change)
        document.querySelectorAll('input[name="clothing-transaction"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.state.type = e.target.value;
                this.updatePreview();
            });
        });

        // Trading Option Checkbox
        if (this.clothingTradingCheckbox) {
            this.clothingTradingCheckbox.addEventListener('change', (e) => {
                this.state.isTrading = e.target.checked;
                 // For trading, we typically have two specific slots: "Your item" and "Wanted item"
                 // We'll simplify this for clothing to just indicate trading,
                 // but we can keep the ability to list up to 3 items if the user desires.
                 // Let's stick to the "up to 3 items" requirement, but adjust the title.
                this.updateUI();
                this.updatePreview();
            });
        }


        // Add/Remove Item Buttons
        if (this.addClothingItemBtn) {
            this.addClothingItemBtn.addEventListener('click', () => this.addClothingItem());
        }
        if (this.removeClothingItemBtn) {
            this.removeClothingItemBtn.addEventListener('click', () => this.removeClothingItem());
        }

        // In Bulk Checkbox (handled by inline script, listen for change)
        if (this.clothingInBulkInput) {
             this.clothingInBulkInput.addEventListener('change', (e) => {
                 this.state.useInBulk = e.target.checked;
                 this.updatePreview();
             });
        }


        // Respectively Checkbox
        if (this.clothingRespectivelyCheck) {
            this.clothingRespectivelyCheck.addEventListener('change', (e) => {
                this.state.useRespectively = e.target.checked;
                this.updatePreview();
            });
        }

        // Submit and Copy Buttons
        if (this.clothingSubmitBtn) {
            this.clothingSubmitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.updatePreview();
            });
        }
        if (this.clothingCopyBtn) {
            this.clothingCopyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleCopy();
            });
        }

        // Reset Button
        const clothingResetBtn = document.getElementById('clothing-reset-btn');
        if (clothingResetBtn) {
            clothingResetBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.resetForm();
            });
        }

        // Initial active state for transaction type radio buttons on load
        const initialTransactionType = document.querySelector('input[name="clothing-transaction"]:checked')?.value || 'Buying';
        this.state.type = initialTransactionType;
        const initialTradingState = this.clothingTradingCheckbox?.checked || false;
        this.state.isTrading = initialTradingState;

    }

    addClothingItem() {
        if (this.state.activeItemCount < 3) {
            this.state.activeItemCount++;
            this.state.items[this.state.activeItemCount - 1] = {}; // Initialize new item state
            this.updateUI();
            this.updatePreview();
        }
    }

    removeClothingItem() {
        if (this.state.activeItemCount > 1) {
            // Clear state for the item being removed
            this.state.items[this.state.activeItemCount - 1] = {};
            this.state.activeItemCount--;
            this.updateUI();
            this.updatePreview();
        }
    }

    createClothingInputGroup(index) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'clothing-item-group mb-3 p-3 border rounded'; // bg-light // Added some styling

        const nameLabel = document.createElement('label');
        nameLabel.className = 'form-label';
        nameLabel.innerHTML = `<i class="fas fa-tags"></i> Clothing Name:`;
        itemDiv.appendChild(nameLabel);

        const nameInputGroup = document.createElement('div');
        nameInputGroup.className = 'position-relative'; // For suggestions positioning
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'form-control clothing-name-input';
        nameInput.placeholder = this.state.isTrading && index === 0 ? 'Your clothing item' : (this.state.isTrading && index === 1 ? 'Wanted clothing item' : `Clothing Name ${index + 1}`);
        nameInput.value = this.state.items[index].name || ''; // Populate from state

        const nameSuggestionsDiv = document.createElement('div');
        nameSuggestionsDiv.className = 'suggestion-box'; // Use existing suggestion box styling

        nameInputGroup.appendChild(nameInput);
        nameInputGroup.appendChild(nameSuggestionsDiv);
        itemDiv.appendChild(nameInputGroup);

        // Autocomplete logic for this specific input
        nameInput.addEventListener('input', () => {
            this.handleClothingNameInput(nameInput, nameSuggestionsDiv, index);
        });
         nameInput.addEventListener('focus', () => {
             if (nameInput.value) {
                 this.handleClothingNameInput(nameInput, nameSuggestionsDiv, index);
             }
         });
        nameInput.addEventListener('blur', () => {
            setTimeout(() => {
                nameSuggestionsDiv.style.display = 'none';
            }, 100);
        });


        const colorLabel = document.createElement('label');
        colorLabel.className = 'form-label mt-3';
        colorLabel.innerHTML = `<i class="fas fa-fill-drip"></i> Color:`;
        itemDiv.appendChild(colorLabel);

        const colorSelect = document.createElement('select');
        colorSelect.className = 'form-select clothing-color-select';
        colorSelect.innerHTML = '<option value="">Select a color</option>';
        clothingColors.forEach(color => {
            const option = document.createElement('option');
            option.value = color;
            option.textContent = color ? color.charAt(0).toUpperCase() + color.slice(1) : 'Select a color';
            colorSelect.appendChild(option);
        });
         colorSelect.value = this.state.items[index].color || ''; // Populate from state
        colorSelect.addEventListener('change', (e) => {
            this.state.items[index].color = e.target.value;
            this.updatePreview();
        });
        itemDiv.appendChild(colorSelect);

        const typeLabel = document.createElement('label');
        typeLabel.className = 'form-label mt-3';
        typeLabel.innerHTML = `<i class="fas fa-list-alt"></i> Type:`;
        itemDiv.appendChild(typeLabel);

        const typeSelect = document.createElement('select');
        typeSelect.className = 'form-select clothing-type-select';
        typeSelect.innerHTML = '<option value="">Select a type</option>';
        clothingTypes.forEach(type => {
             const option = document.createElement('option');
             option.value = ` of ${type}`; // Value includes " of " for output formatting
             option.textContent = type;
             // CORRECTED: Use typeSelect to append the option
             typeSelect.appendChild(option);
         });
         typeSelect.value = this.state.items[index].type || ''; // Populate from state
        typeSelect.addEventListener('change', (e) => {
            this.state.items[index].type = e.target.value;
            this.updatePreview();
        });
        itemDiv.appendChild(typeSelect);

        const genderLabel = document.createElement('label');
        genderLabel.className = 'form-label mt-3';
        genderLabel.innerHTML = `<i class="fas fa-venus-mars"></i> Gender:`;
        itemDiv.appendChild(genderLabel);

        const genderRadioGroup = document.createElement('div');
        genderRadioGroup.className = 'd-flex gap-4';
        clothingGenders.forEach(gender => {
            const formCheck = document.createElement('div');
            formCheck.className = 'form-check';
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.className = 'form-check-input clothing-gender-radio';
            radioInput.name = `clothing-gender-${index}`; // Unique name for each item
            radioInput.value = gender;
            radioInput.id = `clothing-gender-${index}-${gender.replace(/\s+/g, '-') || 'any'}`; // Unique ID

            const radioLabel = document.createElement('label');
            radioLabel.className = 'form-check-label';
            radioLabel.htmlFor = radioInput.id;
            radioLabel.textContent = gender || 'Any';

             if (this.state.items[index].gender === gender) {
                 radioInput.checked = true;
             }
             if (!this.state.items[index].gender && gender === "") { // Default to 'Any' if no gender in state
                  radioInput.checked = true;
             }


            radioInput.addEventListener('change', (e) => {
                this.state.items[index].gender = e.target.value;
                this.updatePreview();
            });

            formCheck.appendChild(radioInput);
            formCheck.appendChild(radioLabel);
            genderRadioGroup.appendChild(formCheck);
        });
        itemDiv.appendChild(genderRadioGroup);


         const quantityLabel = document.createElement('label');
         quantityLabel.className = 'form-label mt-3';
         quantityLabel.innerHTML = `<i class="fas fa-sort-numeric-up"></i> Quantity (Optional):`;
         itemDiv.appendChild(quantityLabel);

         const quantityInput = document.createElement('input');
         quantityInput.type = 'number';
         quantityInput.className = 'form-control clothing-quantity-input';
         quantityInput.placeholder = 'e.g., 5';
         quantityInput.min = '1';
         quantityInput.value = this.state.items[index].quantity || ''; // Populate from state

         quantityInput.addEventListener('input', (e) => {
             this.state.items[index].quantity = e.target.value;
             this.updatePreview();
         });
         itemDiv.appendChild(quantityInput);

         const pluralCheckLabel = document.createElement('label');
         pluralCheckLabel.className = 'checkbox-button-label mt-2';
         pluralCheckLabel.innerHTML = `<input type="checkbox" id="clothingPluralS${index}" class="d-none"> Add "S"`;

         const pluralInput = pluralCheckLabel.querySelector('input[type="checkbox"]');
         pluralInput.checked = this.state.items[index].usePluralS || false;
         if (pluralInput.checked) pluralCheckLabel.classList.add('active');

         pluralInput.addEventListener('change', (e) => {
             this.state.items[index].usePluralS = e.target.checked;
             if (e.target.checked) pluralCheckLabel.classList.add('active');
             else pluralCheckLabel.classList.remove('active');
             this.updatePreview();
         });
          pluralCheckLabel.addEventListener('click', (e) => {
              e.preventDefault();
              pluralInput.checked = !pluralInput.checked;
              pluralInput.dispatchEvent(new Event('change'));
         });

         itemDiv.appendChild(pluralCheckLabel);


        return itemDiv;
    }

    createClothingPriceInputGroup(index) {
        const priceDiv = document.createElement('div');
        priceDiv.className = 'clothing-price-group mb-3';

        const priceLabel = document.createElement('label');
        priceLabel.className = 'form-label';
        priceLabel.innerHTML = `<i class="fas fa-dollar-sign"></i> Price/Budget for Item ${index + 1}:`;
        priceDiv.appendChild(priceLabel);

        const priceInputGroup = document.createElement('div');
        priceInputGroup.className = 'input-group';

        const span = document.createElement('span');
        span.className = 'input-group-text';
        span.innerHTML = '<i class="fas fa-dollar-sign"></i>';

        const priceInput = document.createElement('input');
        priceInput.type = 'text';
        priceInput.className = 'form-control clothing-price-input';
        priceInput.placeholder = 'e.g. 400000 or 2M';
        priceInput.value = this.state.items[index].price || ''; // Populate from state

        priceInput.addEventListener('input', (e) => {
            this.state.items[index].price = e.target.value;
            this.updatePreview();
        });

        priceInputGroup.appendChild(span);
        priceInputGroup.appendChild(priceInput);

        const eachCol = document.createElement('div');
        eachCol.className = 'col-auto d-flex align-items-center';

        const eachCheckLabel = document.createElement('label');
        eachCheckLabel.className = 'checkbox-button-label ms-2';
        eachCheckLabel.innerHTML = `<input type="checkbox" id="clothingEach${index}" class="d-none"> Each`;

        const eachInput = eachCheckLabel.querySelector('input[type="checkbox"]');
        eachInput.checked = this.state.items[index].useEach || false;
         if (eachInput.checked) eachCheckLabel.classList.add('active');

        eachInput.addEventListener('change', (e) => {
            this.state.items[index].useEach = e.target.checked;
             if (e.target.checked) eachCheckLabel.classList.add('active');
             else eachCheckLabel.classList.remove('active');
            this.updatePreview();
        });
         eachCheckLabel.addEventListener('click', (e) => {
              e.preventDefault();
              eachInput.checked = !eachInput.checked;
              eachInput.dispatchEvent(new Event('change'));
         });

        eachCol.appendChild(eachCheckLabel);

        priceInputGroup.appendChild(eachCol); // Append Each checkbox within the input group


        priceDiv.appendChild(priceInputGroup);
        return priceDiv;
    }


    handleClothingNameInput(inputElement, suggestionsBox, index) {
        const value = inputElement.value.toLowerCase();
        suggestionsBox.innerHTML = ''; // Clear previous suggestions

        if (value) {
            const matchingItems = clothingItems.filter(item =>
                item.toLowerCase().includes(value)
            );

            if (matchingItems.length > 0) {
                suggestionsBox.style.display = 'block';
                matchingItems.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item';
                    div.textContent = item;
                    div.addEventListener('mousedown', (e) => { // Use mousedown
                        e.preventDefault();
                        inputElement.value = item;
                        this.state.items[index].name = item; // Update state
                        suggestionsBox.style.display = 'none';
                        this.updatePreview(); // Update preview after selection
                    });
                    suggestionsBox.appendChild(div);
                });
            } else {
                suggestionsBox.style.display = 'none';
             this.state.items[index].name = ''; // Clear name in state if input is cleared
             this.updatePreview(); // Update preview when input is cleared
            }
        } else {
            suggestionsBox.style.display = 'none';
             this.state.items[index].name = ''; // Clear name in state if input is cleared
             this.updatePreview(); // Update preview when input is cleared
        }
    }


    updateUI() {
        try {
            if (!this.clothingItemsContainer || !this.clothingPricesContainer) {
                console.error('Clothing containers not found');
                return;
            }
            
            this.clothingItemsContainer.innerHTML = '';
            this.clothingPricesContainer.innerHTML = '';

            const count = this.state.activeItemCount;
            for (let i = 0; i < count; i++) {
                this.clothingItemsContainer.appendChild(this.createClothingInputGroup(i));
                // Only add price input if not trading or for the first item if trading (simplified for clothing)
                 // Let's add price inputs for all active items regardless of trading for now
                this.clothingPricesContainer.appendChild(this.createClothingPriceInputGroup(i));
            }

            if (this.clothingItemCount) {
                this.clothingItemCount.textContent = `${this.state.activeItemCount} of 3`;
            }
            if (this.addClothingItemBtn) {
                this.addClothingItemBtn.disabled = this.state.activeItemCount >= 3;
            }
            if (this.removeClothingItemBtn) {
                this.removeClothingItemBtn.disabled = this.state.activeItemCount <= 1;
            }

            // Show/hide respectively checkbox based on active item count
            if (this.clothingRespectivelyCheck) {
                this.clothingRespectivelyCheck.classList.toggle('d-none', this.state.activeItemCount <= 1);
            }

             // Hide 'Each' checkbox if trading is selected
             document.querySelectorAll('.clothing-price-group .checkbox-button-label').forEach(label => {
                  label.style.display = this.state.isTrading ? 'none' : 'inline-flex';
             });
             // If trading is selected, ensure useEach states are false in state
              if (this.state.isTrading) {
                  this.state.items.forEach(item => item.useEach = false);
                  // No need to manually remove active classes here as updateUI recreates elements
              }

             // Hide 'Quantity' and 'Add S' if trading is selected (adjusting based on standard clothing ads)
             document.querySelectorAll('.clothing-item-group .clothing-quantity-input, .clothing-item-group .checkbox-button-label').forEach(element => {
                  element.style.display = this.state.isTrading ? 'none' : ''; // Use empty string to revert to default display
             });
             // If trading, clear quantity and set usePluralS to false in state
             if (this.state.isTrading) {
                 this.state.items.forEach(item => {
                     item.quantity = '';
                     item.usePluralS = false;
                 });
             }
        } catch (error) {
            console.error('Error in updateUI:', error);
        }
    }

    // Format price function for clothing ads (Returns formatted string with $)
    formatClothingPrice(price) {
        if (!price) return 'Negotiable'; // Return "Negotiable" if price is empty

        let cleanPrice = price.toString().toLowerCase().replace(/[^0-9km.]/g, '');
        let numericValue;

        if (cleanPrice.includes('k')) {
            numericValue = parseFloat(cleanPrice.replace('k', '')) * 1000;
            if (!isNaN(numericValue)) {
                // Replace commas with periods in the formatted output, add $
                return `$${numericValue.toLocaleString('en-US', { minimumFractionDigits: 0 }).replace(/,/g, '.')}`;
            }
        } else if (cleanPrice.includes('m')) {
             numericValue = parseFloat(cleanPrice.replace('m', '')) * 1000000;
             if (!isNaN(numericValue)) {
                  // Format millions: no decimal if whole number, one decimal otherwise, add $ and " Million"
                  const formattedNum = numericValue / 1000000;
                  return `$${formattedNum % 1 === 0 ? formattedNum.toFixed(0) : formattedNum.toFixed(1)} Million`;
             }
        } else {
            numericValue = parseFloat(cleanPrice);
            if (!isNaN(numericValue)) {
                // Replace commas with periods in the formatted output, add $
                return `$${numericValue.toLocaleString('en-US', { minimumFractionDigits: 0 }).replace(/,/g, '.')}`;
            }
        }

        return 'Negotiable'; // Return "Negotiable" for invalid input
    }

    formatClothingAd() {
        const { type, isTrading, items, useInBulk, useRespectively, activeItemCount } = this.state;

        const validItems = items.slice(0, activeItemCount).filter(item => item.name && item.name.trim());

        if (validItems.length === 0) {
             // If no items are entered, provide a default prompt
             return 'Your clothing advertisement will appear here...';
        }

        const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

        let itemsText = validItems.map((item, index) => {
            const { name, color, type, gender, quantity, usePluralS } = item;
            const parts = [];

            if (quantity && !isTrading) { // Only add quantity if not trading
                 parts.push(quantity.trim());
            }

            if (color && color.trim()) {
                parts.push(color.trim());
            }
            if (name && name.trim()) {
                 let formattedName = name.trim();
                  // MODIFIED: Add 's' if 'Add S' is checked and name doesn't end in 's' (regardless of quantity)
                  if (usePluralS && !formattedName.toLowerCase().endsWith('s')) {
                      formattedName += 's';
                  }
                 parts.push(formattedName);
            }
            if (type && type.trim()) {
                parts.push(type.trim());
            }
            if (gender && gender.trim() && !isTrading) { // Only add gender if not trading
                 parts.push(gender.trim());
            }

            const itemText = parts.join(' ');
            
            // Add "a" article for single items when not trading and not plural
            if (!isTrading && !quantity && !usePluralS && !itemText.toLowerCase().endsWith('s')) {
                // Check if item name already starts with "a " (like "a pet dog")
                // Also, do not add 'a' for inherently plural items or multi-word names
                const pluralClothing = ['pants', 'jeans', 'shorts', 'trousers', 'leggings', 'sweatpants', 'boxers', 'briefs', 'joggers'];
                const lowerItem = itemText.toLowerCase();
                const isMultiWord = lowerItem.trim().split(/\s+/).length > 1;
                if (!itemText.toLowerCase().startsWith('a ') && !pluralClothing.some(word => lowerItem.includes(word)) && !isMultiWord) {
                    return `a ${itemText}`;
                }
            }

            return itemText;
        }).filter(text => text.trim()).map((t, i, arr) => i === 0? t: i === arr.length - 1 ? (arr.length === 2 ? ' and ' + t : ' and ' + t): ', ' + t).join('');


        let output = `${capitalizedType}${isTrading ? ' or trading' : ''} ${itemsText}`;

        if (useInBulk && !isTrading) { // Only add in bulk if not trading
             output += ' in bulk';
        }


        const validPrices = items.slice(0, activeItemCount).map(item => item.price && item.price.trim()).filter(price => price);

        let priceSection = `. ${type === 'Buying' ? 'Budget' : 'Price'}: `;

        if (validPrices.length > 0) {
            const priceTexts = validPrices.map((price, index) => {
                const formattedPrice = this.formatClothingPrice(price); // Returns "$4.000", "$4 Million", or "Negotiable"
                const suffix = (items[index].useEach && !isTrading) ? ' each' : ''; // Only add 'each' if not trading
                 return formattedPrice + suffix; // priceText element could be "$4.000 each", "$4 Million", "Negotiable"
            });

            // Join the price texts based on the number of prices and 'respectively'
             if (priceTexts.length === 1) {
                 priceSection += priceTexts[0];
             } else if (isTrading && priceTexts.length === 2) {
                 // Trading prices joined with " and "
                 priceSection += priceTexts.join(' and ');
             } else if (useRespectively && validPrices.length === validItems.length && !isTrading) {
                 // Respectively prices joined with " and " for 2, ", " for more
                 if (priceTexts.length === 2) {
                      priceSection += priceTexts.join(' and ') + ' respectively';
                 } else {
                     priceSection += priceTexts.join(', ') + ' respectively';
                 }
            } else { // Multiple prices, not trading, not respectively - joined with ", "
                 priceSection += priceTexts.join(', ');
            }

            output += priceSection;

            // MODIFIED PERIOD LOGIC: Add a final period based on the end of the priceSection
            const priceSectionEnd = priceSection.trimEnd(); // Trim trailing whitespace for accurate checking
             if (priceSectionEnd.endsWith('Negotiable') ||
                 priceSectionEnd.endsWith('Million') ||
                 priceSectionEnd.endsWith(' each') ||
                 priceSectionEnd.endsWith('respectively')) {
                  // Add a period only if the output doesn't already end with one (e.g., from "Negotiable.")
                  if (!output.trimEnd().endsWith('.')) {
                     output += '.';
                  }
            }
             // No period is added if the priceSectionEnd is a purely numerical value (e.g., "$4.000")


        } else {
             output += `. ${type === 'Buying' ? 'Budget' : 'Price'}: Negotiable.`; // Period is already here for Negotiable
        }


         // Removed the redundant final period check based on alphabetic character,
         // as the MODIFIED PERIOD LOGIC above handles all cases.


        return output.trim();
    }

    updatePreview() {
        try {
            if (this.clothingOutput) {
                this.clothingOutput.textContent = this.formatClothingAd();
            }
        } catch (error) {
            console.error('Error in updatePreview:', error);
        }
    }

    handleCopy() {
        const outputText = this.clothingOutput.textContent;
        if (outputText === 'Your clothing advertisement will appear here...') {
            showErrorPopup('Generate an ad first!');
            return;
        }
        
        // History Implement by @bishalqx980
        const container = document.getElementById("recent-log-history");

        const p = document.createElement("p");
        p.textContent = outputText;

        const button = document.createElement("button");
        button.textContent = "Copy";

        button.addEventListener("click", () => {
            navigator.clipboard.writeText(outputText);
            button.textContent = "Copied";
            setTimeout(() => {
                button.textContent = "Copy";
            }, 1800);
        });

        p.appendChild(button);
        container.appendChild(p);
        // History log done !!

        navigator.clipboard.writeText(outputText).then(() => {
            showNotification('Copied to clipboard!');
        }).catch(err => {
            showErrorPopup('Failed to copy to clipboard: ' + err);
        });
    }

    resetForm() {
        this.state = {
            type: 'Buying',
            isTrading: false,
            items: [{}, {}, {}],
            activeItemCount: 1,
            useInBulk: false,
            useRespectively: false
        };

        // Reset transaction type radio buttons (assuming 'Buying' is default)
        const defaultTransactionRadio = this.form.querySelector('input[name="clothing-transaction"][value="Buying"]');
        if (defaultTransactionRadio) {
            defaultTransactionRadio.checked = true;
             // Manually trigger change to update active class
             defaultTransactionRadio.dispatchEvent(new Event('change', { bubbles: true }));
        }

        // Reset trading checkbox
        if (this.clothingTradingCheckbox) {
             this.clothingTradingCheckbox.checked = false;
        }

        // Reset in bulk checkbox
        if (this.clothingInBulkInput) {
             this.clothingInBulkInput.checked = false;
              if(this.clothingInBulkLabel) this.clothingInBulkLabel.classList.remove('active');
        }


        // Reset respectively checkbox
        if (this.clothingRespectivelyCheck) {
             const respectivelyInput = this.clothingRespectivelyCheck.querySelector('input[type="checkbox"]');
             if(respectivelyInput) respectivelyInput.checked = false;
              this.clothingRespectivelyCheck.classList.add('d-none'); // Hide it
        }


        this.updateUI(); // Redraw UI with initial state
        this.updatePreview(); // Reset output text
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Removed the redundant clothing type select population from here.
        // The selects are created and populated within createClothingInputGroup.

        new ClothingForm();


        // Global click listener to hide suggestion boxes
        document.addEventListener('click', (e) => {
            // Select all elements that are suggestion boxes
            document.querySelectorAll('.suggestion-box').forEach(suggestionBox => {
                // Check if the clicked element is NOT inside the current suggestion box
                // AND is NOT the input field associated with this suggestion box.
                // This requires finding the associated input, which is the previous sibling
                // of the suggestion-box's parent element's previous sibling (the input-group)
                let isClickInsideBox = suggestionBox.contains(e.target);
                let associatedInput = null;

                // Find the input element that is a sibling of the suggestion box's parent div
                // Look for an input with class 'clothing-name-input' within the same item group
                const itemGroup = suggestionBox.closest('.clothing-item-group');
                if (itemGroup) {
                     associatedInput = itemGroup.querySelector('.clothing-name-input');
                }


                if (!isClickInsideBox && (!associatedInput || !associatedInput.contains(e.target))) {
                    suggestionBox.style.display = 'none';
                }
            });
        });
    } catch (error) {
        console.error('Error in clothing DOMContentLoaded:', error);
    }
});

}
