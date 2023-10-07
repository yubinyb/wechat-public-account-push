/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4e7e33efd15de4ee',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '88f787be0924b99540d073ce2a02bf20',

  PROVINCE: '江苏',
  CITY: '常州',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'yubin',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oeOCc6HpzAOgvE3i2Telb9BpCt9o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '8pWTE0TkidK6vl6d0eU9c4MplobetH3TIstyX7jIx1M',
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '8pWTE0TkidK6vl6d0eU9c4MplobetH3TIstyX7jIx1M',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oeOCc6HpzAOgvE3i2Telb9BpCt9o',
    }
  ],

}

module.exports = USER_CONFIG

