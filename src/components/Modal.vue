<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask">
        <!-- 弹框 -->
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close"  @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <!-- 定义插槽 -->
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <!-- 当btnType == 1 时，就只显示一个按钮 $emit组件向父组件传递-->
          <a href="javascript:;" class="btn" v-if="btnType == 1" @click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:;" class="btn" v-if="btnType == 2" @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn" v-if="btnType == 1" @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn" v-if="btnType == 2" @click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default{
  name: 'Modal',
  props: {
    // 弹框类型：小mall、中middle、大large、表单form
    modalType: {
      type: String,
      default: 'form'
    },
    // 弹框提示
    title: String,
    // 按钮类型：1：确定按钮 2：取消按钮 3：确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    // 控制弹框是否显示出来
    showModal: Boolean
  }
}
</script>

<style lang="scss">
@import './../assets/scss/modal.scss';

</style>
