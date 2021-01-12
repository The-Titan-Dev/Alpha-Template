<template>
    <div style="margin: 10px;">
        <h1>Overlay</h1>
        <div>
            <ACard>
                <ACardHeader>DEFAULT</ACardHeader>
                <ACardBody>
                    <b-row style="text-align:center;">
                        <b-col>       
                          <b-card title="SAMPLE" aria-hidden="true">
                            <AOverlay size="sm">
                            </AOverlay>
                            <b-card-text>SAMPLE
                            </b-card-text>
                          </b-card>
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                            <AOverlay size="md">
                            </AOverlay>
                            <b-card-text>SAMPLE
                            </b-card-text>
                          </b-card>
                        </b-col>
                        <b-col>       
                          <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="lg">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card>
                        </b-col>
                    </b-row>
                </ACardBody>
            </ACard>
        </div>
        <div>
            <ACard>
                <ACardHeader>Primary</ACardHeader>
                <ACardBody>
                    <b-row style="text-align:center;">
                        <b-col>    
                          <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="sm" variant="primary">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="md" variant="primary">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="lg" variant="primary">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                    </b-row>
                </ACardBody>
            </ACard>
        </div>
        <div>
            <ACard>
                <ACardHeader>Success</ACardHeader>
                <ACardBody>
                    <b-row style="text-align:center;">
                        <b-col>    
                          <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="sm" variant="success">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="md" variant="success">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="lg" variant="success">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                    </b-row>
                </ACardBody>
            </ACard>
        </div>
        <div>
            <ACard>
                <ACardHeader>Info</ACardHeader>
                <ACardBody>
                    <b-row style="text-align:center;">
                        <b-col>    
                          <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="sm" variant="info">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="md" variant="info">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="lg" variant="info">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                    </b-row>
                </ACardBody>
            </ACard>
        </div>
        <div>
            <ACard>
                <ACardHeader>Warning</ACardHeader>
                <ACardBody>
                    <b-row style="text-align:center;">
                        <b-col>    
                          <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="sm" variant="warning">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="md" variant="warning">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="lg" variant="warning">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                    </b-row>
                </ACardBody>
            </ACard>
        </div>
        <ACard>
          <ACardHeader>Overlay Props</ACardHeader>
          <ACardBody>
            <label style="font-weight: bold">size : </label>
            <label>sm md lg</label>
            <br>
            <label style="font-weight: bold">variant : </label>
            <label>primary warning info success</label>
            <br>
            <label style="font-weight: bold">classname : </label>
            <label>your_class_name</label>
            <br>
            <label style="font-weight: bold">id : </label>
            <label>your_id</label>
            <pre>
              <b>Sample Code:</b>
              <span style="color:blue">&lt;AOverlay size="sm" variant="warning"&gt;</span>
            </pre>
      </ACardBody>
    </ACard>
    </div>
</template>

<script>
export default {
    
    }
</script>

<style lang="scss">

</style>
