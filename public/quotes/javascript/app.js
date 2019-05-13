const view = (function(){

    const DOMStrings = {
        buttons:{
            homeButtons: '.btn',
            houseCleaning: '.houseCleaning',
            carWash: '.carWash',
            carpetCleaning: '.carpetCleaning',
            addNum: '.add--',
            subNum: '.sub--',
            exit: '.exit',
            submit: '.submit',
            addBtns: '.add',
            subBtns: '.sub'
        },
        elements:{
            popup: '.popup',
            popupHeader: '.popup__header',
            popupView: '.popup__view',
            task__name: '.task__name--',
            task__total: '.task__total--',
            time: '.time',
            price: '.price',
            selection: '.selection'
        }  
    };

    const serviceStrings = {
        houseCleaning: {
            regular: {
                names: ['Bedrooms', 'Living Rooms', 'Bathrooms'],
                tags: ['bed','liv','bath']
            },
            spring:{
                names: ['Bedrooms', 'Living Rooms', 'Bathrooms', 'Blinds','Fans','Oven'],
                tags: ['bed','liv','bath', 'blnd','fan','oven']
            },
            bond:{
                names: ['Bedrooms', 'Living Rooms', 'Bathrooms', 'Blinds','Fans','Oven'],
                tags: ['bed','liv','bath', 'blnd','fan','oven']
            }
        }
    };

    const renderHtml = {
        houseCleaning: {
            regular :`
            <table class="tasks">
                <!-- Table will be generated with JS related to the selection -->
                <tr>
                    <td class="task__name--bed">Bedroom</td>
                    <td class="task__total--bed">0</td>
                    <td class="task__add--bed">
                        <button class="add add--bed">+</button>
                    </td>
                    <td class="task__sub--bed">
                        <button class="sub sub--bed">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--liv">Living Room</td>
                    <td class="task__total--liv">0</td>
                    <td class="task__add--liv">
                        <button class="add add--liv">+</button>
                    </td>
                    <td class="task__sub--liv">
                        <button class="sub sub--liv">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--bath">Bathroom</td>
                    <td class="task__total--bath">0</td>
                    <td class="task__add--bath">
                        <button class="add add--bath">+</button>
                    </td>
                    <td class="task__sub--bath">
                        <button class="sub sub--bath">-</button>
                    </td>
                </tr>
            </table>
            <button class="submit">Calculate</button>`,
            spring: `
            <table class="tasks">
                <!-- Table will be generated with JS related to the selection -->
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[0]}">${serviceStrings.houseCleaning.spring.names[0]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[0]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[0]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[0]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[0]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[0]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[1]}">${serviceStrings.houseCleaning.spring.names[1]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[1]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[1]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[1]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[1]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[1]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[2]}">${serviceStrings.houseCleaning.spring.names[2]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[2]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[2]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[2]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[2]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[2]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[3]}">${serviceStrings.houseCleaning.spring.names[3]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[3]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[3]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[3]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[3]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[3]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[4]}">${serviceStrings.houseCleaning.spring.names[4]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[4]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[4]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[4]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[4]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[4]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[5]}">${serviceStrings.houseCleaning.spring.names[5]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[5]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[5]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[5]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[5]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[5]}">-</button>
                    </td>
                </tr>
            </table>
            <button class="submit">Calculate</button>`,
            bond: `
            <table class="tasks">
                <!-- Table will be generated with JS related to the selection -->
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[0]}">${serviceStrings.houseCleaning.bond.names[0]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.bond.tags[0]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[0]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[0]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[0]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[0]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[1]}">${serviceStrings.houseCleaning.bond.names[1]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.bond.tags[1]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[1]}">
                        <button class="add add--${serviceStrings.houseCleaning.bond.tags[1]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[1]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.bond.tags[1]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[2]}">${serviceStrings.houseCleaning.bond.names[2]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[2]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[2]}">
                        <button class="add add--${serviceStrings.houseCleaning.bond.tags[2]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[2]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.bond.tags[2]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[3]}">${serviceStrings.houseCleaning.bond.names[3]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.bond.tags[3]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[3]}">
                        <button class="add add--${serviceStrings.houseCleaning.bond.tags[3]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[3]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.bond.tags[3]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[4]}">${serviceStrings.houseCleaning.bond.names[4]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.bond.tags[4]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[4]}">
                        <button class="add add--${serviceStrings.houseCleaning.bond.tags[4]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[4]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.bond.tags[4]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[5]}">${serviceStrings.houseCleaning.bond.names[5]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.bond.tags[5]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[5]}">
                        <button class="add add--${serviceStrings.houseCleaning.bond.tags[5]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[5]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.bond.tags[5]}">-</button>
                    </td>
                </tr>
            </table>
            <button class="submit">Calculate</button>`
        },
        carWash: {
            hatch: 'Hatch',
            sedan: 'Sedan',
            suv: 'SUV'
        },
        carpetCleaning: 'Carpet Cleaning'
    };

    return{
        getSelectors:()=>{
            return DOMStrings;
        },
        getNames: (service, type)=>{
            return serviceStrings[service][type].names;
        },
        getTags: (service, type)=>{
            return serviceStrings[service][type].tags;
        },
        getHtml: (service, type)=>{
            return renderHtml[service][type];
        }
    };
})();

///////////////////////////////////////////////////////////////
const data = (function(){

    const serviceLength = {
        houseCleaning:{
            regular:{
                bathroom: 30,
                kitchen: 30,
                dusting: 5,
                vacuum: 3,
                mop: 3
            },
            spring:{
                bathroom: 45,
                kitchen: 45,
                dusting: 8,
                vacuum: 5,
                mop: 5,
                fan: 5,
                blinds: 15,
                oven: 90
            },
            bond:{
                bathroom: 45,
                kitchen: 90,
                dusting: 2,
                vacuum: 3,
                mop: 5,
                fan: 5,
                wall: 10,
                blinds: 20,
                oven: 90
            }
        },
        carpetCleaning: 30
    };

    var prices = {
        houseCleaning: {
            regular:33,
            spring: 40,
            bond: 43
        },
        carpetCleaning: 40
    };

    return{
        getTime: (service, type)=>{
            if(service === 'houseCleaning'){
                //regular cleaning
                if(type === 'regular'){
                    return (bedCount, livCount, bathCount)=>{
                        return (bedCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (livCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (bathCount * serviceLength[service][type].bathroom) + serviceLength[service][type].kitchen;
                    }
                }
                //spring cleaning
                else if(type === 'spring'){
                    return (bedCount, livCount, bathCount, blindsCount, ovenCount, fansCount)=>{
                        return (bedCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (livCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (bathCount * serviceLength[service][type].bathroom) + serviceLength[service][type].kitchen + (ovenCount * serviceLength[service][type].oven) +
                                (blindsCount * serviceLength[service][type].blinds) + (fansCount * serviceLength[service][type].fan);
                    };
                }
                //bond cleaning
                else if(type === 'bond'){
                    return (bedCount, livCount, bathCount, blindsCount, ovenCount, fansCount)=>{
                        return (bedCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (livCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (bathCount * serviceLength[service][type].bathroom) + serviceLength[service][type].kitchen + (ovenCount * serviceLength[service][type].oven) +
                                (blindsCount * serviceLength[service][type].blinds) + ((bedCount + livCount + bathCount + 1) * 4 * serviceLength[service][type].wall) + (fansCount * serviceLength[service][type].fan);
                    };
                }
            }
            
            else if(service === 'carWash'){
                return serviceLength[service];
            }
            
            else if(service === 'carpetCleaning'){
                // return (rooms)=>{
                //     rooms * serviceLength[service];
                // }
                return serviceLength[service];
            }
        },

        getPrice : (service, type)=>{
            if(service === 'houseCleaning'){
                return prices[service][type];
            }else{
                return prices[service];
            }
            
        }
    };
})();



////////////////////////////////////////////////////////////////
const controller = (function (view, data) {

    //ELEMENT SELECTORS
    const popup = document.querySelector(view.getSelectors().elements.popup);
    const popupHeader = document.querySelector(view.getSelectors().elements.popupHeader);
    //const popupView = document.querySelector(view.getSelectors().elements.popupView);
    const homeButtons = document.querySelectorAll(view.getSelectors().buttons.homeButtons);
    const exit = document.querySelector(view.getSelectors().buttons.exit);

    //TODO:
    const addButtons = document.querySelectorAll(view.getSelectors().buttons.addBtns);
    const subButtons = document.querySelectorAll(view.getSelectors().buttons.subBtns);

    
    

    let state = {};

    //Home buttons event listeners
    homeButtons.forEach((e) => {

        e.addEventListener('click', (el) => {
            state.serviceName = el.target.id; //TODO: this is not working

            if(state.serviceName === 'houseCleaning'){
                state.typeID = 'regular';
                //maybe render the Html from here
                popup.innerHTML = `<div class="popup__header">
                <div name="options" class="popup__options">
                    <button class="btn btn--green" id="regular">Regular</button>
                    <button class="btn btn--green" id="spring">Spring</button>
                    <button class="btn btn--green" id="bond">Bond</button>
                </div>
                
            </div>
            <div class="popup__view">
                <!-- <table class="tasks">
                    
                    <tr>
                        <td class="task__name--bed">Bedroom</td>
                        <td class="task__total--bed">0</td>
                        <td class="task__add--bed">
                            <button class="add add--bed">+</button>
                        </td>
                        <td class="task__sub--bed">
                            <button class="sub sub--bed">-</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="task__name--liv">Living Room</td>
                        <td class="task__total--liv">0</td>
                        <td class="task__add--liv">
                            <button class="add add--liv">+</button>
                        </td>
                        <td class="task__sub--liv">
                            <button class="sub sub--liv">-</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="task__name--bath">Bathroom</td>
                        <td class="task__total--bath">0</td>
                        <td class="task__add--bath">
                            <button class="add add--bath">+</button>
                        </td>
                        <td class="task__sub--bath">
                            <button class="sub sub--bath">-</button>
                        </td>
                    </tr>
                </table>
                <button class="submit">Calculate</button> -->
            </div>
            <div class="popup__result">
                <div class="popup__text">
                    <h3 class="popup__text--h">Time:</h3>
                    <p class="popup__text--p"><span class="bold time" id="time">0</span> <span class="bold">hours</span></p>
                </div>
                <div class="popup__text">
                    <h3 class="popup__text--h">Price:</h3>
                    <p class="popup__text--p"><span class="bold price" id="price">0</span> <span class="bold">$</span></p>
                </div>
            </div>
    
            <footer class="footer">
                <div class="footer__text">
    
                    <p class="footer__p">Don't forget to inform the customer that this is an estimate only.<br>
                        The actual length and price may vary.
                    </p>
                </div>
                <div class="footer__exit">
                    <button class="exit">X</button>
                </div>
            </footer>`;
                popup.style.visibility = "visible";
                
            }
            else if(state.serviceName === 'carWash'){
                popup.innerHTML = `
                <table class="tasks tasks--car">
                    <tr>
                        <th class="carCell">Car</th>
                        <th class="carCell">Exterior</th>
                        <th class="carCell">Interior</th>
                        <th class="carCell">Polishing</th>
                        <th class="carCell">Full interior</th>
                    </tr>
                    <tr>
                        <td class="carCell">Hatch</td>
                        <td class="carCell">33$</td>
                        <td class="carCell">66$</td>
                        <td class="carCell">75$</td>
                        <td class="carCell">120$</td>
                    </tr>
                    <tr>
                        <td class="carCell">Sedan</td>
                        <td class="carCell">33$</td>
                        <td class="carCell">66$</td>
                        <td class="carCell">75$</td>
                        <td class="carCell">120$</td>
                    </tr>
                    <tr>
                        <td class="carCell">SUV</td>
                        <td class="carCell">33$</td>
                        <td class="carCell">75$</td>
                        <td class="carCell">100$</td>
                        <td class="carCell">180$</td>
                    </tr>
                </table>
                <button class="exit">X</button>
                `;
                popup.style.visibility = "visible";
                
            }
            else if(state.serviceName === 'carpetCleaning'){
                popup.innerHTML = `
                <div class="popup__view">
                    <table class="tasks">
                    
                    <tr>
                        <td class="task__name--carpet">Number of Rooms</td>
                        <td class="task__total--carpet">0</td>
                        <td class="task__add--carpet">
                            <button class="add add--carpet">+</button>
                        </td>
                        <td class="task__sub--carpet">
                            <button class="sub sub--carpet">-</button>
                        </td>
                    </tr>
                </table>
                <button class="submit">Calculate</button>
                </div>
                <div class="popup__result">
                    <div class="popup__text">
                        <h3 class="popup__text--h">Time:</h3>
                        <p class="popup__text--p">Approximately <span class="bold time" id="time">0</span> <span class="bold">hours</span></p>
                    </div>
                    <div class="popup__text">
                        <h3 class="popup__text--h">Price:</h3>
                        <p class="popup__text--p"><span class="bold price" id="price">0</span> <span class="bold">$</span></p>
                    </div>
                </div>

                <footer class="footer">
                    <div class="footer__text">

                        <p class="footer__p">Don't forget to inform the customer that this is an estimate only.<br>
                            The actual length and price may vary.
                        </p>
                    </div>
                    <div class="footer__exit">
                        <button class="exit">X</button>
                    </div>
                </footer>
                `;
                popup.style.visibility = "visible";
                popupHeader.innerHtml = ``;
            }
        });
    });

    

    // //Popup close event listener
    // exit.addEventListener('click', () => {
    //     popup.style.visibility = "hidden";
    //     state.serviceName = '';

    //     const DOMStr = view.getSelectors();
    //     const tags = (service, type) => {
    //         return view.getTags(service, type);
    //     };
        
    //     tags(state.serviceName, state.typeID).forEach((item) => {
    //         if(document.querySelector(`${DOMStr.elements.task__total}${item}`)){
    //             document.querySelector(`${DOMStr.elements.task__total}${item}`).textContent = 0;
    //         }
    //     document.querySelector(DOMStr.elements.time).textContent = 0;
    //     document.querySelector(DOMStr.elements.price).textContent = 0;
    //     });

    // });



    //POPUP EVENT LISTENER
    popup.addEventListener('click', (e) => {

        const DOMStr = view.getSelectors();
        
        //TypeID selector buttons
        if (e.target.matches('#regular')){
            state.serviceName = 'houseCleaning';
            state.typeID = 'regular';
            document.querySelector(DOMStr.elements.time).textContent = 0;
            document.querySelector(DOMStr.elements.price).textContent = 0;

            e.target.parentNode.parentNode.nextSibling.nextSibling.innerHTML = view.getHtml(state.serviceName, state.typeID);

            //TODO: use nextElementSibling, children, lastElementSibling...
        }
        else if (e.target.matches('#spring')){
            state.serviceName = 'houseCleaning';
            state.typeID = 'spring';
            document.querySelector(DOMStr.elements.time).textContent = 0;
            document.querySelector(DOMStr.elements.price).textContent = 0;

            e.target.parentNode.parentNode.nextSibling.nextSibling.innerHTML = view.getHtml(state.serviceName, state.typeID);

        }
        else if (e.target.matches('#bond')){
            state.serviceName = 'houseCleaning';
            state.typeID = 'bond';
            document.querySelector(DOMStr.elements.time).textContent = 0;
            document.querySelector(DOMStr.elements.price).textContent = 0;

            e.target.parentNode.parentNode.nextSibling.nextSibling.innerHTML = view.getHtml(state.serviceName, state.typeID);
        }
        else if (e.target.matches('#hatch')){
            state.serviceName = 'carWash';
            state.typeID = 'hatch';
            e.target.parentNode.parentNode.nextSibling.nextSibling.innerHTML = view.getHtml(state.serviceName, state.typeID);
        }
        else if (e.target.matches('#sedan')){
            state.serviceName = 'carWash';
            state.typeID = 'sedan';
            e.target.parentNode.parentNode.nextSibling.nextSibling.innerHTML = view.getHtml(state.serviceName, state.typeID);
        }
        else if (e.target.matches('#suv')){
            state.serviceName = 'carWash';
            state.typeID = 'suv';
            e.target.parentNode.parentNode.nextSibling.nextSibling.innerHTML = view.getHtml(state.serviceName, state.typeID);
        }


        //EXIT BUTTON

        //TODO: fix the .getTags()
        if(e.target.matches(view.getSelectors().buttons.exit)){
            popup.style.visibility = "hidden";

            const DOMStr = view.getSelectors();
            // const tags = (service, type) => {
            //     return view.getTags(service, type);
            // };
            
            view.getTags(state.serviceName, state.typeID).forEach((item) => {
                if(document.querySelector(`${DOMStr.elements.task__total}${item}`)){
                    document.querySelector(`${DOMStr.elements.task__total}${item}`).textContent = 0;
                }
            
            document.querySelector(DOMStr.elements.time).textContent = 0;
            document.querySelector(DOMStr.elements.price).textContent = 0;
        })};


        //ADD & SUB BUTTONS
        //TODO:
        if(e.target.matches('.add')){
            e.target.parentNode.previousSibling.previousSibling.innerHTML = parseInt(e.target.parentNode.previousSibling.previousSibling.innerHTML);
            e.target.parentNode.previousSibling.previousSibling.innerHTML ++;
        }
        else if(e.target.matches('.sub')){
            e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML = parseInt(e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML);
            e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML --;
        }


        //SUBMIT BUTTON
        if(e.target.matches('.submit')){
            if(state.serviceName === 'houseCleaning'){
                if(state.typeID === 'regular'){
                    let bedCount = parseInt(document.querySelector('.task__total--bed').innerHTML);
                    let livCount = parseInt(document.querySelector('.task__total--bed').innerHTML);
                    let bathCount = parseInt(document.querySelector('.task__total--bed').innerHTML);

                    let x = data.getTime(state.serviceName, state.typeID);
                    let result = x(bedCount,livCount,bathCount) / 60;

                    //e.target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.textContent = result.toFixed(2);
                    e.target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.textContent = result.toFixed(2);
                    e.target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.lastChild.previousSibling.firstChild.textContent = (result * 33).toFixed(2);
                }
                
                else if(state.typeID === 'spring'){
                    let bedCount = parseInt(document.querySelector('.task__total--bed').innerHTML);
                    let livCount = parseInt(document.querySelector('.task__total--bed').innerHTML);
                    let bathCount = parseInt(document.querySelector('.task__total--bed').innerHTML);
                    let blindCount = parseInt(document.querySelector('.task__total--blnd').innerHTML);
                    let fanCount = parseInt(document.querySelector('.task__total--fan').innerHTML);
                    let ovenCount = parseInt(document.querySelector('.task__total--oven').innerHTML);

                    let x = data.getTime(state.serviceName, state.typeID);
                    let result = x(bedCount,livCount,bathCount,blindCount,fanCount, ovenCount) / 60;

                    e.target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.textContent = result.toFixed(2);
                    e.target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.lastChild.previousSibling.firstChild.textContent = (result * 43).toFixed(2);
                }

                else if(state.typeID === 'bond'){
                    let bedCount = parseInt(document.querySelector('.task__total--bed').innerHTML);
                    let livCount = parseInt(document.querySelector('.task__total--bed').innerHTML);
                    let bathCount = parseInt(document.querySelector('.task__total--bed').innerHTML);
                    let blindCount = parseInt(document.querySelector('.task__total--blnd').innerHTML);
                    let fanCount = parseInt(document.querySelector('.task__total--fan').innerHTML);
                    let ovenCount = parseInt(document.querySelector('.task__total--oven').innerHTML);

                    let x = data.getTime(state.serviceName, state.typeID);
                    let result = x(bedCount,livCount,bathCount,blindCount,fanCount, ovenCount) / 60;

                    e.target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.textContent = result.toFixed(2);
                    e.target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.lastChild.previousSibling.firstChild.textContent = (result * 48).toFixed(2);
                }
            }
            else if(state.serviceName === 'carpetCleaning'){
                let roomCount = parseInt(document.querySelector('.task__total--carpet').innerHTML);
                

                    let x = data.getTime(state.serviceName) * roomCount;
                    
                    let result = x / 60;
                    console.log(e.target.parentNode.nextElementSibling.children[0].children[1].children[0]);
                    e.target.parentNode.nextElementSibling.children[0].children[1].children[0].textContent = result.toFixed(2);
                    e.target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.lastChild.previousSibling.firstChild.textContent = (roomCount * data.getPrice(state.serviceName)).toFixed(2);
            }
        }
        
        
    });

})(view, data);






