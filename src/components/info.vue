<template>
  <div class="activity">
    <div class="activityWrap">
      <van-field
        v-model="username"
        name="用户名"
        label="* 姓名："
        placeholder="用户名"
        :rules="[{ required: true, message: '请输入姓名' }]"
      />
      <van-field
        v-model="sex"
        name="sex"
        label="* 性别："
        right-icon="arrow"
        placeholder="请选择"
        :rules="[{ required: true, message: '请选择性别' }]"
        @click="showPicker = true"
      />
      <van-field
        v-model="age"
        name="age"
        label="* 年龄："
        placeholder="请输入你的真实年龄"
        :rules="[{ required: true, message: '请输入你的真实年龄' }]"
      />
      <van-field
        v-model="area"
        name="area"
        label="* 代言地区："
        right-icon="arrow"
        placeholder="请选择"
        :rules="[{ required: true, message: '请填写代言地区' }]"
        @click="showareaPicker = true"
      />
      <van-area title="标题" :area-list="areaList" />
      <van-field
        v-model="job"
        name="job"
        label="* 职业："
        right-icon="arrow"
        placeholder="请选择"
        :rules="[{ required: true, message: '请填写职业' }]"
        @click="showjobPicker = true"
      />
    </div>
    <div class="uploading">
      <div class="upimg">
        <p class="personImg">* 个人照片：</p>
        <img src="../assets/img/plus.png" alt="">
        <van-uploader class="uploader" v-model="fileList" multiple></van-uploader>
        <p class="personImg">个人秀短视频：</p>
        <van-uploader class="uploader" v-model="fileList" multiple></van-uploader>
        <!-- <van-icon name="plus" color="#fff" ref="plugIcon" /> -->
        <p>
          <span class="atroduce">个人简介</span>
          <span class="antroducetip">(待审核时可在个人海选中心修改)</span>
        </p>
        <van-field class="content" v-model="content" placeholder="说点什么" />
      </div>
    </div>
    <div class="userphone">
      <van-field v-model="phone" label="* 手机号码：" class="userphoneitem" placeholder="请输入手机号" />
      <van-field v-model="sms" center clearable label="* 验证码：" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary" class="smdcode">发送验证码</van-button>
        </template>
      </van-field>
    </div>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </div>
</template>
<script>
import { Field, Button, Form, Picker, Popup, Uploader,Area  } from "vant";
export default {
  // 注册组件
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Picker.name]: Picker,
    [Popup.name]: Popup,
    [Uploader.name]: Uploader
  },
  data() {
    return {
      value: "",
      username: "",
      sex: "",
      age: "",
      area: "",
      job: "",
      content: "",
      phone: "",
      sms: "",
      showareaPicker: false,
      showjobPicker:false,
      columns: [
        // 第一列
        {
          values: ["男", "女"],
          defaultIndex: 2
        }
      ],
      fileList: []
    };
  },
  mounted() {},
  methods: {
    onSubmit() {},
    onConfirm(value) {
      console.log("this.value ", this.sex);
    },
    afterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      setTimeout(() => {
        file.status = "failed";
        file.message = "上传失败";
      }, 1000);
    }
  }
};
</script>
<style  scoped lang="scss">
.activity {
  width: 95%;
  margin: 0 auto;
  color: #333;
}
.activityWrap {
  background: #fff;
  border-radius: 6px;
}
.uploading {
  background: #fff;
  margin-top: 20px;
}
p.personImg {
    padding-top: 30px;
    margin-bottom: 20px;
}
.upimg {
  margin: 0 30px;
  padding-bottom: 40px;
}
.uploader {
  margin-left: 20px;
  margin-bottom: 40px;
}
.atroduce {
  font-size: 26px;
  color: #333;
}
.antroducetip {
  color: #999;
}
.content {
  margin-top: 20px;
  height: 167px;
  border: 1px solid #dddddd;
}
.smdcode {
  background: #fff;
  color: #fc0407;
  border: none;
}
.userphone {
  margin-top: 20px;
}
.userphoneitem {
  padding-left: 30px;
}
</style>




