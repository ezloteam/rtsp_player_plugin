<script src="../../../src/rtsp-player.ios.ts"></script>
<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!"/>
    <GridLayout columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
      <Label text="1,0" row="0" col="0" backgroundColor="#289062"/>
      <Placeholder @creatingView="creatingView" col="1" row="0" />
      <Label text="1,1" row="1" col="0" backgroundColor="#43b883"/>
      <Label text="1,234" row="1" col="1" backgroundColor="#43b833"/>
    </GridLayout>
  </Page>
</template>

<script >
  import { RtspPlayer } from 'nativescript-rtsp-player';
  export default {
    methods: {
      creatingView: function (args) {
        console.log(Object.keys(args));
        let player = new RtspPlayer(args.context);
        player.startStream("rtsp://admin:admin123@192.168.30.74");
        args.view = player.getView();
      }
    }
  }
</script>

<style scoped>
  ActionBar {
    background-color: #53ba82;
    color: #ffffff;
  }

  .message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;

  }
</style>
