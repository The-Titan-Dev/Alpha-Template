<template>
  <div style="margin: 10px;">
    <b>DEFAULT</b>
    <div style=" width: 100%; display: inline-flex;">
      <ACard width="400px" classname="test" id="testID" radius="0px">
        <ACardHeader fontawesome_icon="address-card">
          Sample Primary
        </ACardHeader>
        <ACardBody>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.123123
        </ACardBody>
        <ACardFooter>
          <AButton size="md" variant="primary">SUBMIT</AButton>
        </ACardFooter>
      </ACard>
    </div>

    <b>variant [primary,success,info,warning,]</b>
    <div style="width: 100%; display: inline-flex">
      <ACard
        variant="primary"
        classname="test"
        id="testID"
        radius="20px"
        width="400px"
      >
        <ACardHeader fontawesome_icon="user">
          Sample Primary
        </ACardHeader>
        <ACardBody>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.123123
        </ACardBody>
        <ACardFooter>
          <AButton size="md" variant="primary">SUBMIT</AButton>
        </ACardFooter>
      </ACard>

      <ACard
        variant="info"
        classname="test"
        id="testID"
        radius="20px"
        width="400px"
      >
        <ACardHeader fontawesome_icon="user">
          Sample Primary
        </ACardHeader>
        <ACardBody>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.123123
        </ACardBody>
        <ACardFooter>
          <AButton size="md" variant="info">SUBMIT</AButton>
        </ACardFooter>
      </ACard>

      <ACard
        variant="success"
        classname="test"
        id="testID"
        radius="20px"
        width="400px"
      >
        <ACardHeader fontawesome_icon="user">
          Sample Primary
        </ACardHeader>
        <ACardBody>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.123123
        </ACardBody>
        <ACardFooter>
          <AButton size="md" variant="success">SUBMIT</AButton>
        </ACardFooter>
      </ACard>

      <ACard
        variant="warning"
        classname="test"
        id="testID"
        radius="20px"
        width="400px"
      >
        <ACardHeader fontawesome_icon="user">
          Sample Primary
        </ACardHeader>
        <ACardBody>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.123123
        </ACardBody>
        <ACardFooter>
          <AButton size="md" variant="warning">SUBMIT</AButton>
        </ACardFooter>
      </ACard>
    </div>

    <div>
      <ACard classname="test" id="testID" radius="0px">
        <ACardHeader fontawesome_icon="address-card">
          CODE
        </ACardHeader>
        <ACardBody>
          <span style="color: blue">&lt;ACard&gt;</span><br />
          <span style="color: blue">&lt;ACardHeader&gt;</span>Your_Header<span
            style="color: blue"
            >&lt;/ACardHeader&gt;</span
          ><br />
          <span style="color: blue">&lt;ACardBody&gt;</span
          >Card_Details_Body<span style="color: blue">&lt;/ACardBody&gt;</span
          ><br />
          <span style="color: blue">&lt;ACardFooter&gt;</span>Your_Footer<span
            style="color: blue"
            >&lt;/ACardFooter&gt;</span
          ><br />
          <span style="color: blue">&lt;/ACard&gt;</span><br />

          <pre>
            <b>PROPS</b>
            <b>ACard =>  </b>
            [
              <b>classname</b> => class attr,
              <b>id </b>=> id attr,
              <b>radius</b> => card border-radius,
              <b>width</b> => card width,
              <b>variant</b> => card variant (primary,info, success, warning),
              
            ];
            <b>ACardHeader =>  </b>
            [
              <b>classname</b> => class attr,
              <b>id </b>=> id attr,
              <b>fontawesome_icon </b>=> fontawesome icons,

            ]

            </pre>
        </ACardBody>
      </ACard>
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
