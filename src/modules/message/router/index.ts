export default [
  {
    path: "/message",
    name: "MessageMain",
    redirect: { name: "NewMessages", query: { message_type: 2 } },
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "MessageMain" */ "@/modules/message/views/Main.vue"),
      children: [
        {
          path: "new-messages",
          name: "NewMessages",
          component: () =>
            import(/* webpackChunkName: "NewMessages" */ "@/modules/message/views/tabs/NewMessages.vue"),
        },
        {
          path: "all-messages",
          name: "AllMessages",
          component: () =>
            import(/* webpackChunkName: "AllMessages" */ "@/modules/message/views/tabs/AllMessages.vue"),
        },
    ]
  },
  {
    path: "/message-details/:id",
    name: "MessageDetail",
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "MessageDetail" */ "@/modules/message/views/MessageDetail.vue"),
  },
  {
    path: "/message-new",
    name: "MessageNew",
    meta: {
      requiresAuth: false,
    },
    component: () => import(/* webpackChunkName: "MessageNew" */ "@/modules/message/views/NewMessage.vue"),
  },
  {
    path: "/message-new-intern",
    name: "MessageNew2",
    meta: {
      requiresAuth: false,
    },
    component: () => import(/* webpackChunkName: "MessageNew2" */ "@/modules/message/components/NewMessageFormIntern.vue"),
  },
];
