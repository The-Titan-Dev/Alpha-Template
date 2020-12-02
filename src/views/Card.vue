<template>
<div style="margin: 10px;">
  <b>DEFAULT</b>
  <div style=" width: 100%; display: inline-flex;">
      <ACards width="400px" classname="test" id="testID" radius="0px">
        <ACardsHeader fontawesome_icon="address-card">
            Sample Primary
        </ACardsHeader>
        <ACardsBody>
            Some quick example text to build on the card title and make up the bulk of the card's content.123123
        </ACardsBody>
         <ACardsFooter>
           <AButton size="md" type="primary">SUBMIT</AButton>
        </ACardsFooter>
      </ACards>
  </div>

  <b>type [primary,success,info,warning,]</b>
  <div style="width: 100%; display: inline-flex">
      <ACards type="primary" classname="test" id="testID" radius="20px" width="400px" >
        <ACardsHeader  fontawesome_icon="user">
            Sample Primary
        </ACardsHeader>
        <ACardsBody>
            Some quick example text to build on the card title and make up the bulk of the card's content.123123
        </ACardsBody>
         <ACardsFooter>
           <AButton size="md" type="primary">SUBMIT</AButton>
        </ACardsFooter>
      </ACards>

      <ACards type="info" classname="test" id="testID" radius="20px" width="400px" >
        <ACardsHeader  fontawesome_icon="user">
            Sample Primary
        </ACardsHeader>
        <ACardsBody>
            Some quick example text to build on the card title and make up the bulk of the card's content.123123
        </ACardsBody>
         <ACardsFooter>
           <AButton size="md" type="info">SUBMIT</AButton>
        </ACardsFooter>
      </ACards>

      <ACards type="success" classname="test" id="testID" radius="20px" width="400px" >
        <ACardsHeader  fontawesome_icon="user">
            Sample Primary
        </ACardsHeader>
        <ACardsBody>
            Some quick example text to build on the card title and make up the bulk of the card's content.123123
        </ACardsBody>
         <ACardsFooter>
           <AButton size="md" type="success">SUBMIT</AButton>
        </ACardsFooter>
      </ACards>

      <ACards type="warning" classname="test" id="testID" radius="20px" width="400px" >
        <ACardsHeader  fontawesome_icon="user">
            Sample Primary
        </ACardsHeader>
        <ACardsBody>
            Some quick example text to build on the card title and make up the bulk of the card's content.123123
        </ACardsBody>
         <ACardsFooter>
           <AButton size="md" type="warning">SUBMIT</AButton>
        </ACardsFooter>
      </ACards>
  </div>
  
 
    <div>
       <ACards classname="test" id="testID" radius="0px">
        <ACardsHeader fontawesome_icon="address-card">
           CODE
        </ACardsHeader>
        <ACardsBody>
            <span style="color: blue">&lt;ACards&gt;</span><br>
            <span style="color: blue">&lt;ACardsHeader&gt;</span>Your_Header<span style="color: blue">&lt;/ACardsHeader&gt;</span><br>
            <span style="color: blue">&lt;ACardsBody&gt;</span>Card_Details_Body<span style="color: blue">&lt;/ACardsBody&gt;</span><br>
            <span style="color: blue">&lt;ACardsFooter&gt;</span>Your_Footer<span style="color: blue">&lt;/ACardsFooter&gt;</span><br>
            <span style="color: blue">&lt;/ACards&gt;</span><br>


            <pre>
            <b>PROPS</b>
            <b>Acards =>  </b>
            [
              <b>classname</b> => class attr,
              <b>id </b>=> id attr,
              <b>radius</b> => card border-radius,
              <b>width</b> => card width,
              <b>type</b> => card type (primary,info, success, warning),
              
            ];
            <b>ACardsHeader =>  </b>
            [
              <b>classname</b> => class attr,
              <b>id </b>=> id attr,
              <b>fontawesome_icon </b>=> fontawesome icons,

            ]

            </pre>
        </ACardsBody>
      </ACards>
  </div>
</div>
</template>

<script>


export default {
  name: "Cards"
};
</script>

<style>
  /* .test{
    color: red;
    background-image: url(../assets/logo.png) !important;
    background-size : contain;
  } */
</style>


