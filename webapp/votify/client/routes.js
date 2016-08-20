import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import MainLayout from './imports/components/layouts/main.layout';
import Queue from './imports/components/pages/queue.page';

// home page
FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, {
      content: <Queue />,
    });
  },
});
