<template>
  <Page>
    <ActionBar title="RTSP Player Plugin Demo"/>
    <GridLayout columns="*" rows="*" backgroundColor="#3c495e">
      <Placeholder @creatingView="creatingView" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script>
  import { RtspPlayer } from 'nativescript-rtsp-player';
  export default {
    methods: {
      creatingView: function (args) {
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
