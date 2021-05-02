//  a report on how much milk is produced per shed
        let totalProduction = (Shed,liters) => 
        console.log("your production in "+ Shed  + liters + "liters per day");
        totalProduction("shed A ", "510 ");
        totalProduction("shed B ", "308 ");
        totalProduction("shed C ", "486 ");
        totalProduction("shed D ", "572 ");


        let array = [510, 308, 486, 572];
            
            // Getting sum of numbers
            let sum = array.reduce(function(a, b){
                return a + b;
            }, 0);
        
            console.log("The total production is",sum , "liters per day");

     //a report on how much pay you'll receive over time.

     let incomeOverTime= (selling_price, time) => 
     console.log("your  " + time + " income will be Ksh " +  selling_price  );
     incomeOverTime("590940 ", " weekly ");
  


     let yearly = [2617020, 2363760, 2617020, 2532600, 2617020, 2532600, 2617020, 2617020, 2532600, 2617020, 2532600, 2617020];
         
         // Getting sum of numbers
         let totalPrice = yearly.reduce(function(a, b){
             return a + b;
         }, 0);
     
         console.log("Your yearly income will be Ksh ",totalPrice );
// yearly output

        let  January  = [
            {
            productId:1,
            productName:"Millk",
            productImage:"January",
            productQuantity:58156,
            productPrice:45
            }

            ];

            let totalJanuary =  January .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)

            console.log("Your income for January is ",totalJanuary );

            let  February  = [
                {
                productId:2,
                productName:"Millk",
                productImage:"February",
                productQuantity:54404,
                productPrice:45
                }

                ];

                let totalFebruary =  February .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)

                console.log("Your income for February is ",totalFebruary);


            let  March  = [
                    {
                    productId:55,
                    productName:"Millk",
                    productImage:"March",
                    productQuantity:58156,
                    productPrice:45
                    }

                    ];
    
                    let totalMarch =  March .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)
    
                    console.log("Your income for March is ",totalMarch);

            let  April  = [
                    {
                    productId:55,
                    productName:"Millk",
                    productImage:"April",
                    productQuantity:56280,
                    productPrice:45
                    }

                    ];

                    let totalApril =  April .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)

                    console.log("Your income for April is ",totalApril);

                    let  May  = [
                        {
                        productId:55,
                        productName:"Millk",
                        productImage:"May",
                        productQuantity:58156,
                        productPrice:45
                        }

                        ];

                        let totalMay =  May .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)

                        console.log("Your income for May is ",totalMay);
                            

            let  June  = [
                        {
                        productId:55,
                        productName:"Millk",
                        productImage:"June",
                        productQuantity:56280,
                        productPrice:45
                        }
    
                        ];
        
                        let totalJune =  June .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)
        
                        console.log("Your income for June is ",totalJune);

            let  July  = [
                            {
                            productId:55,
                            productName:"Millk",
                            productImage:"July",
                            productQuantity:58156,
                            productPrice:45
                            }
        
                            ];
            
                            let totalJuly =  July .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)
            
                            console.log("Your income for July is ",totalJuly);

            let  August  = [
                                {
                                productId:55,
                                productName:"Millk",
                                productImage:"August",
                                productQuantity:58156,
                                productPrice:45
                                }
            
                                ];
                
                                let totalAugust =  August .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)
                
                                console.log("Your income for August is ",totalAugust);

            let  September  = [
                        {
                        productId:55,
                        productName:"Millk",
                        productImage:"September",
                        productQuantity:56280,
                        productPrice:45
                        }
    
                        ];
        
                        let totalSeptember =  September .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)
        
                        console.log("Your income for September is ",totalSeptember);


                        let  October  = [
                            {
                            productId:55,
                            productName:"Millk",
                            productImage:"October",
                            productQuantity:58156,
                            productPrice:45
                            }
        
                            ];
            
                            let totalOctober =  October .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)
            
                            console.log("Your income for October is ",totalOctober);


            let  November  = [
                        {
                        productId:55,
                        productName:"Millk",
                        productImage:"November",
                        productQuantity:56280,
                        productPrice:45
                        }
    
                        ];
        
                        let totalNovember =  November .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)
        
                        console.log("Your income for November is ",totalNovember);

            let  December  = [
                        {
                        productId:55,
                        productName:"Millk",
                        productImage:"December",
                        productQuantity:58156,
                        productPrice:45
                        }
    
                        ];
        
                        let totalDecember =  December .map(x=>x.productQuantity*x.productPrice).reduce((a,b)=>a+b)
        
                        console.log("Your income for December is ",totalDecember);
                                
