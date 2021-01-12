<template>
    <div style="margin: 10px;">
      <h1>INITIAL DESIGN AND COLOR</h1>
      <div>
        <ACard>
          <ACardHeader>DEFAULT</ACardHeader>
          <ACardBody>
              <b-row style="text-align:center;">
                <b-col><ADropdown :config="config_1" placeholder="Default" icon="clipboard-list"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" icon="question" variant="default" size="sm"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" icon="comments" variant="default" size="md"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" icon="clone" variant="default" size="lg"></ADropdown></b-col>
              </b-row>
              <br>
             <b-row style="text-align:center">
                <b-col><ADropdown :config="config_1" placeholder="Default" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="primary" size="sm" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="primary" size="md" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="primary" size="lg" disabled></ADropdown></b-col>
            </b-row>
          </ACardBody>
        </ACard>
      </div>
      <div>
         <ACard>
          <ACardHeader>PRIMARY</ACardHeader>
          <ACardBody>
             <b-row style="text-align:center;">
                <b-col><ADropdown :config="config_1" placeholder="Normal" variant="primary"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="primary" size="sm"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="primary" size="md"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="primary" size="lg"></ADropdown></b-col>
              </b-row>
              <br>
             <b-row style="text-align:center">
                <b-col><ADropdown :config="config_1" placeholder="Normal" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="primary" size="sm" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="primary" size="md" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="primary" size="lg" disabled></ADropdown></b-col>
            </b-row>
          </ACardBody>
        </ACard>

       
      </div>
      <div>
         <ACard>
          <ACardHeader>SUCCESS</ACardHeader>
          <ACardBody>
             <b-row style="text-align:center;">
                <b-col><ADropdown :config="config_1" placeholder="Normal" variant="success"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="success" size="sm"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="success" size="md"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="success" size="lg"></ADropdown></b-col>
              </b-row>
              <br>
             <b-row style="text-align:center">
                <b-col><ADropdown :config="config_1" placeholder="Normal" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="success" size="sm" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="success" size="md" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="success" size="lg" disabled></ADropdown></b-col>
            </b-row>
          </ACardBody>
        </ACard>
      </div>
      <div>
         <ACard>
          <ACardHeader>INFO</ACardHeader>
          <ACardBody>
             <b-row style="text-align:center;">
                <b-col><ADropdown :config="config_1" placeholder="Normal" variant="info"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="info" size="sm"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="info" size="md"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="info" size="lg"></ADropdown></b-col>
              </b-row>
              <br>
             <b-row style="text-align:center">
                <b-col><ADropdown :config="config_1" placeholder="Normal" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="warning" size="sm" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="warning" size="md" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="warning" size="lg" disabled></ADropdown></b-col>
            </b-row>
          </ACardBody>
        </ACard>
      </div>
      <div>
         <ACard>
          <ACardHeader>WARNING</ACardHeader>
          <ACardBody>
             <b-row style="text-align:center;">
                <b-col><ADropdown :config="config_1" placeholder="Normal" variant="warning"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="warning" size="sm"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="warning" size="md"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="warning" size="lg"></ADropdown></b-col>
              </b-row>
              <br>
             <b-row style="text-align:center">
                <b-col><ADropdown :config="config_1" placeholder="Normal" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="warning" size="sm" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="warning" size="md" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="warning" size="lg" disabled></ADropdown></b-col>
            </b-row>
          </ACardBody>
        </ACard>
      </div>
      <div>
        <ACard>
          <ACardHeader>DANGER</ACardHeader>
          <ACardBody>
             <b-row style="text-align:center;">
                <b-col><ADropdown :config="config_1" placeholder="Normal" variant="danger"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="danger" size="sm"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="danger" size="md"></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="danger" size="lg"></ADropdown></b-col>
              </b-row>
              <br>
             <b-row style="text-align:center">
                <b-col><ADropdown :config="config_1" placeholder="Normal" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Small" variant="danger" size="sm" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Medium" variant="danger" size="md" disabled></ADropdown></b-col>
                <b-col><ADropdown :config="config_1" placeholder="Large" variant="danger" size="lg" disabled></ADropdown></b-col>
            </b-row>
          </ACardBody>
        </ACard>
      </div>
       <ACard>
          <ACardHeader>Dropdown Props</ACardHeader>
          <ACardBody>
            <label style="font-weight: bold">icon:</label>&nbsp;
            <label>(address-card)</label>
            <br>
            <label style="font-weight: bold">size:</label>&nbsp;
            <label>sm md lg</label>
            <br>
            <label style="font-weight: bold">variant:</label>&nbsp;
            <label>primary warning info success danger</label>
            <br>
            <label style="font-weight: bold">v-on:click.native:</label>&nbsp;
            <label>your_method_name</label>
            <br>
            <label style="font-weight: bold">classname: </label>&nbsp;
            <label>your_class_name</label>
            <br>
            <label style="font-weight: bold">id: </label>&nbsp;
            <label>your_id</label>
            <br>
            <label style="font-weight: bold">classname: </label>&nbsp;
            <label>your_class_name</label>
            <br>
            <label style="font-weight: bold">Adding an option:</label><br>
            <pre>
              [content-name]:
                            option: 
                                  [
                                    {
                                      value: "[value]",//required
                                      icon: "[icon]"//not required
                                    },
                                    {
                                      value: "[value]",//required
                                      icon: "[icon]"//not required
                                    }
                                  ]
            </pre>
             <pre>
              <b>Icon Setup:</b>
              Icons are based on font awesome icons. Include icons in the alpha.js to use it freely.
              <br>
              <b>Sample Code:</b>
              <span style="color:blue">&lt;ADropdown v-on:click.native="doSomething" size="lg" variant="info" disabled&gt;</span>
              it is important to use :click.native on created methods to allow click events in components.
            </pre>
      </ACardBody>
    </ACard>
    <br />
  </div>
</template>

<script>
export default {
  name: "Dropdown",
   data: function() {
    return {
      config_1: {
        options: [
          {
            value: "option 1",
            icon:"comments",
          },
          {
            value: "option 2",
             icon:"comments",
          },
        ],
      },
      config_2: {
        options: [
          {
            value: "option 1",
             icon:"comments",
          },
          {
            value: "option 2",
             icon:"comments",
          },

        ],
      },
    };
    
  },
  methods: {
    doSomething() {
      alert("Hello World");
    }
  }
};
</script>
