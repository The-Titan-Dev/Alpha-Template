<template>
    <div style="margin: 10px;">
      <h1>INITIAL DESIGN AND COLOR</h1>
      <div>
        <ACard>
          <ACardHeader>DEFAULT</ACardHeader>
          <ACardBody>
              <b-row style="text-align:center">
                <b-col><AButton v-on:click.native="doSomething">NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm">Small Button</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md">Default Button</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg">
                      Large Button
                      </AButton>
                </b-col>
              </b-row>
              <b-row style="text-align:center; margin-top: 10px">
                <b-col><AButton v-on:click.native="doSomething" disabled=true>NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" disabled=true>SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" disabled=true>MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" disabled=true>
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
                <b-col><AButton :click="doSomething" type="primary">NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" type="primary">SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" type="primary">MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" type="primary">
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
              <br>
             <b-row style="text-align:center">
                <b-col><AButton :click="doSomething" type="primary"  disabled=true>NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" type="primary"  disabled=true>SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" type="primary"  disabled=true>MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" type="primary" disabled=true>
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
                <b-col><AButton v-on:click.native="doSomething" type="success">NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" type="success">SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" type="success">MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" type="success" >
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
              <br>
             <b-row style="text-align:center">
                <b-col><AButton v-on:click.native="doSomething" type="success" disabled=true>NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" type="success" disabled=true>SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" type="success" disabled=true>MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" type="success" disabled=true>
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
                <b-col><AButton  v-on:click.native="doSomething" type="info">NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" type="info">SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" type="info">MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" type="info">
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
              <br>
               <b-row style="text-align:center">
                <b-col><AButton  v-on:click.native="doSomething" type="info"  disabled=true>NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" type="info"  disabled=true>SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" type="info"  disabled=true>MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" type="info" disabled=true>
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
                <b-col><AButton v-on:click.native="doSomething" type="warning">NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" type="warning">SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" type="warning">MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" type="warning" >
                      LARGE
                      </AButton>
                </b-col>
              </b-row>
              <br>
               <b-row style="text-align:center">
                <b-col><AButton v-on:click.native="doSomething" type="warning" disabled=true>NORMAL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="sm" type="warning" disabled=true>SMALL</AButton></b-col>
                <b-col><AButton v-on:click.native="doSomething" size="md" type="warning" disabled=true>MEDIUM</AButton></b-col>
                <b-col>
                      <AButton v-on:click.native="doSomething" size="lg" type="warning" disabled=true>
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
            <label style="font-weight: bold">type : </label>
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
              <span style="color:blue">&lt;AButton v-on:click.native="doSomething" size="lg" type="info" disabled=true&gt;</span>
              it is important to use :click.native on created methods to allow click events in components.
            </pre>
          </ACardBody>
        </ACard>
      <br>
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


