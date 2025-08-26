
 function handleSearch(){
    console.log("handleOnClick pressed");
    
    const name = $("#input").val()
    $.get(`/priceCheck/${name}`,(item)=>{
        console.log(item);
        
        $("body").append(`<div> ${JSON.stringify(item)} </div>`)
    })


}

 function handleBuy(){
    const name = $("#input").val()
    $.get(`/buy/${name}`,(item)=>{
        $("body").append(`<div>Congratulations, you've just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store</div>`)

    })

    
}
