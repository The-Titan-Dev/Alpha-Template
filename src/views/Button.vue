<template>
    <div style="margin: 10px;">
      <h1>INITIAL DESIGN AND COLOR</h1>
      <div>
        <ACard>
          <ACardHeader>DEFAULT</ACardHeader>
          <ACardBody>
              <b-row style="text-align:center">
                <b-col><AButton v-on:click.native="doSomething" type="submit" shadow="heavy" radius="5px">NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" shadow="light">Small Button</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" shadow="3px">Default Button</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg">
                      Large Button
                      </AButton>
                </b-col>
              </b-row>
              <b-row style="text-align:center; margin-top: 10px">
                <b-col><AButton v-on:click.native="doSomething" disabled>NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" disabled>SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" disabled>MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" disabled>
                      LARGE
                      </AButton>
                </b-col>
              </b-row>

          </ACardBody>
        </ACard>
      </div>
      <div>
         <ACard>
          <ACardHeader>PRIMARY</ACardHeader>
          <ACardBody>
             <b-row style="text-align:center;">
                <b-col><AButton :click="doSomething" variant="primary">NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" variant="primary">SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" variant="primary">MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" variant="primary">
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
              <br>
             <b-row style="text-align:center">
                <b-col><AButton :click="doSomething" variant="primary"  disabled>NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" variant="primary"  disabled>SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" variant="primary"  disabled>MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" variant="primary" disabled>
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
          </ACardBody>
        </ACard>

       
      </div>
      <div>
         <ACard>
          <ACardHeader>SUCCESS</ACardHeader>
          <ACardBody>
             <b-row style="text-align:center">
                <b-col><AButton v-on:click.native="doSomething" variant="success">NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" variant="success">SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" variant="success">MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" variant="success" >
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
              <br>
             <b-row style="text-align:center">
                <b-col><AButton v-on:click.native="doSomething" variant="success" disabled>NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" variant="success" disabled>SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" variant="success" disabled>MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" variant="success" disabled>
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
          </ACardBody>
        </ACard>
      </div>
      <div>
         <ACard>
          <ACardHeader>INFO</ACardHeader>
          <ACardBody>
             <b-row style="text-align:center">
                <b-col><AButton  v-on:click.native="doSomething" variant="info">NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" variant="info">SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" variant="info">MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" variant="info">
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
              <br>
               <b-row style="text-align:center">
                <b-col><AButton  v-on:click.native="doSomething" variant="info"  disabled>NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" variant="info"  disabled>SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" variant="info"  disabled>MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" variant="info" disabled>
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
          </ACardBody>
        </ACard>
      </div>
      <div>
        <ACard>
          <ACardHeader>WARNING</ACardHeader>
          <ACardBody>
             <b-row style="text-align:center">
                <b-col><AButton v-on:click.native="doSomething" variant="warning">NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" variant="warning">SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" variant="warning">MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" variant="warning" >
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
              <br>
               <b-row style="text-align:center">
                <b-col><AButton v-on:click.native="doSomething" variant="warning" disabled>NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" variant="warning" disabled>SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" variant="warning" disabled>MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" variant="warning" disabled>
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
          </ACardBody>
        </ACard>
      </div>
       <ACard>
          <ACardHeader>Button Props</ACardHeader>
          <ACardBody>
            <label style="font-weight: bold">size : </label>
            <label>sm md lg</label>
            <br>
            <label style="font-weight: bold">variant : </label>
            <label>primary warning info success</label>
            <br>
            <label style="font-weight: bold">v-on:click.native:</label>
            <label>your_method_name</label>
            <br>
            <label style="font-weight: bold">classname : </label>
            <label>your_class_name</label>
            <br>
            <label style="font-weight: bold">id : </label>
            <label>your_id</label>
            <pre>
              <b>Sample Code:</b>
              <span style="color:blue">&lt;AButton v-on:click.native="doSomething" size="lg" variant="info" disabled&gt;</span>
              it is important to use :click.native on created methods to allow click events in components.
            </pre>
      </ACardBody>
    </ACard>
    <br />
  </div>
</template>

<script>
export default {
  name: "Buttons",
  methods: {
    doSomething() {
      alert("Hello World");
    }
  }
};
</script>
