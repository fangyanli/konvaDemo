<template>
  <div class="hello">
    <h1>Web Socket Chating Room</h1>
    <div>
      <button id="connect" @click="initWebSocket">connect server</button> &nbsp;&nbsp;
    </div>
    <div style="margin:5px 0px;">
		Name:
      <div><input id="name" type="text" value="Byron" style="width:400px;" v-model="msg"/></div>
    </div>
      <div>发送消息：<input type="text" v-model="sendmsg"></div>
      <div style="color:#fff">接收消息：{{revicemsg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  watch: {
    revicemsg: function(value) {},
    sendmsg: function(value) {console.log(value);this.websocketsend(value);},
  },
  data () {
    return {
      revicemsg: '',
      sendmsg:'',
      msg:'vue'
    }
  },
  methods:{
    threadPoxi(data) {
      //参数
      const agentData = data;
      //若是ws开启状态
      if(this.websock.readyState === this.websock.OPEN) {
        this.websocketsend(agentData);
        if(this.started == false) {
          that.startCheck();
        }
      } else if(this.websock.readyState === this.websock.CONNECTING) {
        // 若是 正在开启状态，则等待300毫秒
        let that = this; //保存当前对象this
        setTimeout(function() {
          that.websocketsend(agentData);
          if(that.started == false) {
            that.startCheck();
          }
        }, 300);
      } else {
        // 若未开启 ，则等待500毫秒
        this.initWebSocket();
        let that = this; //保存当前对象this
        setTimeout(function() {
          that.websocketsend(agentData);
          if(that.started == false) {
            that.startCheck();
          }
          //
        }, 500);
      }
    },
    initWebSocket() {
      //ws地址
      const wsuri = 'ws://172.16.14.139:8080';
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onerror = this.websocketerror;
      this.websock.onclose = this.websocketclose;
      //this.websock.send('{<'+this.vue+'>}');
      this.websock.onopen=function(e){
				this.send('{<'+this.msg+'>}');
			};
    },
    websocketonmessage(e) {
      let that = this;
      console.log("收到消息");
      // var reader = new FileReader();
      // reader.onload = function() {
      //   let result = hprose.Formatter.unserialize(reader.result,false,null,true);
      //   console.log(result);
      // };
      // reader.readAsText(e.data);
      this.revicemsg = e.data;
    },
    websocketsend(agentData) {
      this.websock.send(agentData);
    },
    websocketclose(e) {
      console.log("connection closed (" + e.code + ")");
    },
    websocketerror(e) {
      this.error == true;
    },
    startCheck() {
      if(this.websock.readyState === this.websock.OPEN) {
        this.isCon = true;
        this.websock.send("test");
      } else if(this.websock.readyState === this.websock.CONNECTING) {
        this.isCon = false;
        this.title = "正在连接中..." + this.count;
      } else {
        this.isCon = false;
        this.loadedSocket();
      }
      let that = this;
      this.started = true;
      setTimeout(function() {
        that.startCheck();
      }, 1000);
    },
    loadedSocket() {
      this.initWebSocket();
      // let StringIO = hprose.StringIO;
      // let binary = hprose.binary;
      // let Writer = hprose.Writer;
      // let serialize = hprose.Formatter.serialize;

      // function MessageTopic() {}
      // hprose.ClassManager.register(
      //   MessageTopic,
      //   "V3C.MessageQueue.MessageTopic"
      // );
      // var message = new MessageTopic();
      // var stream = new StringIO();
      // var writer = new Writer(stream);
      // message.Id = getGuid();
      // message.Name = env.getProjectCode() + ".client";
      // writer.serialize(message);
      //this.threadPoxi(stream);
    }
  },
  created() {
    this.loadedSocket();
  },
}
</script>

