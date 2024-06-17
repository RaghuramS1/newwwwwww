import React from 'react'
import Header from '../Components/Header';
import CardBrand from '../Components/CardBrand'

export default function Skodacars() {
    return (

        <>
            <div className='font-[Poppins]'>
                <Header />
                <div className='pl-[15%] pr-[15%] pt-20 bg-slate-30 min-h-[calc(100vh)]'>
                    <p className='pt-[50px] text-[20px] font-medium'>Skoda Cars</p><br />

                    <p className='pt-[15px] text-justify text-[#424242]'>Skoda car price starts at Rs 10.89 Lakh for the
                        cheapest model which is Slavia and the price of most expensive model, which is Kodiaq starts at Rs
                        38.50 Lakh. Skoda offers 3 car models in India, including 2 cars in SUV category, 1 car in Sedan
                        category. Skoda has 3 upcoming cars in India, Enyaq, Superb and New Kodiaq.
                        Skoda Auto India is a subsidiary of Czech automobile manufacturer Skoda Auto. The company is a
                        part of Volkswagen Group India and currently heads the Skoda Auto Volkswagen India Private
                        Limited (SAVWIPL) parent brand in India. Founded in 2001, Skoda has its manufacturing facility
                        located in Aurangabad, Maharashtra and a research facility in Pune, Maharashtra.<br /><br />
                        Skoda India currently retails models including the Kushaq, Slavia, and Kodiaq. The carmaker is also
                        working on a new EV SUV for the Indian market, called the Enyaq. It is based on the same platform
                        as the Volkswagen ID.4.
                    </p>
                    <p className='pt-[50px] text-[20px] font-medium'>Skoda Cars Price List (December 2023) in
                        India</p><br />
                    <p className='pt-[50px] text-[17px] '>Skoda car price starts at Rs. 10.89 Lakh and goes upto Rs.
                        38.50 Lakh (Avg. ex-showroom). The prices for the top 5 popular Skoda Cars are: Skoda Slavia Price is
                        Rs. 10.89 Lakh, Skoda Kushaq Price is Rs. 10.89 Lakh, Skoda Kodiaq Price is Rs. 38.50 Lakh, Skoda
                        Enyaq Price is Rs. 50.00 Lakh and Skoda Superb Price is Rs. 28.00 Lakh.</p>

                    <p className='pt-[50px] text-[20px] font-medium'>Skoda Car Models</p><br />
                    <div >
                        <form>

                            <tr>
                                <CardBrand

                                    imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/144999/slavia-exterior-right-front-
three-quarter-6.jpeg?isig=0&q=80"

                                    content6="Skoda Kushaq"
                                    content7='Rs. 10.89 Lakh'
                                    content8='onwards'
                                    content9='Avg. Ex-Showroom price'
                                    content10='show more'
                                /></tr><br />

                            <tr><CardBrand

                                imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/145021/kushaq-exterior-right-front-
three-quarter-12.jpeg?isig=0&q=80"

                                content6="Skoda Kushaq"
                                content7='Rs. 10.89 Lakh'
                                content8='onwards'
                                content9='Avg. Ex-Showroom price'
                                content10='show more'

                            /></tr><br />
                            <tr>
                                <CardBrand

                                    imageUrl1="https://imgd.aeplcdn.com/664x374/n/cw/ec/49051/kodiaq-exterior-right-front-
three-quarter-3.jpeg?isig=0&q=80"

                                    content6="MG Hector"
                                    content7='Rs. 38.50 Lakh'
                                    content8='onwards'

                                    content9='Avg. Ex-Showroom price'
                                    content10='show more'
                                /></tr><br />
                            <tr><CardBrand

                                imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/137871/enyaq-exterior-right-front-
three-quarter.jpeg?isig=0&q=80"

                                content6="Skoda Enyaq"
                                content7='Rs. 50.00 Lakh'
                                content8='onwards'
                                content9='Avg. Ex-Showroom price'
                                content10='show more'
                            />
                            </tr><br />
                            <tr>
                                <CardBrand

                                    imageUrl1="https://imgd.aeplcdn.com/664x374/n/cw/ec/158937/new-superb-exterior-right-
front-three-quarter-5.jpeg?isig=0&q=80"

                                    content6="Skoda Superb"
                                    content7='Rs. 28.00 Lakh'
                                    content8='onwards'
                                    content9='Avg. Ex-Showroom price'
                                    content10='show more'
                                /></tr><br />
                            <tr>
                                <CardBrand

                                    imageUrl1="https://imgd.aeplcdn.com/664x374/n/cw/ec/158729/kodiaq-new-exterior-left-
front-three-quarter.jpeg?isig=0&q=80"

                                    content6="Skoda New Kodiaq"
                                    content7='Rs. 45.00 Lakh'

                                    content8='onwards'
                                    content9='Avg. Ex-Showroom price'
                                    content10='show more'
                                /></tr>
                        </form>
                        <p className='up'></p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

// import React, { useState } from 'react';
// import Header from '../Components/Header';
// import CardBrand from '../Components/CardBrand';

// function NewCars() {
// const [buttonClicked, setButtonClicked] = useState(false);
// const handleButtonClick = () => {
// setButtonClicked(!buttonClicked);
// };

// const buttonText = buttonClicked ? 'Hide' : 'Read More';

// const data = [
// {
// title: 'Card 1',
// description: 'Description for Card 1.',
// image: 'https://placekitten.com/300/200',
// },
// {
// title: 'Card 2',
// description: 'Description for Card 2.',
// image: 'https://placekitten.com/300/201',
// },
// {
// title: 'Card 2',
// description: 'Description for Card 2.',
// image: 'https://placekitten.com/300/201',
// },
// {
// title: 'Card 2',
// description: 'Description for Card 2.',
// image: 'https://placekitten.com/300/201',
// },
// {
// title: 'Card 2',
// description: 'Description for Card 2.',
// image: 'https://placekitten.com/300/201',

// },
// {
// title: 'Card 2',
// description: 'Description for Card 2.',
// image: 'https://placekitten.com/300/201',
// },
// ];

// return (
// <div className='font-[Poppins]'>
// <Header/>
// <div className='pl-[15%] pr-[15%] pt-20 bg-slate-30 min-h-[calc(100vh)]'>
// <p className='text-justify pt-[50px] text-[20px] font-medium '>New Cars</p><br/>

// <p >Are you planning on buying a new car? Well, we know that with so many options available outthere, it gets really difficult to find a good car which suits your need. Hence, we have put together acomplete list of new cars. Maruti Suzuki, Tata and Hyundai are the 3 most popular car brands.
// The 5 most popular cars are Maruti Suzuki Fronx, Tata Nexon, Mahindra Scorpio N, Tata Punchand Mahindra Thar.<br/>
// <button className='text-[#0288D1] pt-[10px] pb-[10px] text-[17px] 'onClick={handleButtonClick}>{buttonText}</button>
// {buttonClicked && <div>
// <p className='pt-[50px] text-[17px] font-medium '>Upcoming Cars Price List (December2023) in India
// </p>
// <div className='overflow-x-auto text-black'>
// <table className="border-collapse border border-slate-500 " width='100%'>

// <tr className='bg-gray-200' align='left'>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>MODEL</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>EXPECTED PRICE</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>EXPECTED LAUNCHDATE</td>
// </tr>
// <tr className='' align='left' >
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Kia Sonet Facelift</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Rs. 8.00 - 15.00 Lakh</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Jan 16, 2024</td>
// </tr>
// <tr className='' align='left' >
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Maruti Suzuki New-genSwift</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Rs. 6.50 - 10.00 Lakh</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Sep 24, 2024</td>
// </tr>
// <tr className='' align='left' >
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Hyundai New Santa Fe</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Rs. 45.00 - 55.00 Lakh</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Feb 15, 2024</td>
// </tr>
// </table>
// </div>

// </div>}
// <br/><br/>

// </p>
// <p className='pt-[50px] text-[20px] font-medium'>Upcoming Cars in India 2023</p>
// <p className='pt-[30px] text-[17px] font-medium'>New Car Launch in India 2023 - Aldetails</p><br/>

// </div>
// </div>
// );
// }
// export default NewCars;