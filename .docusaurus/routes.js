
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','fd5'),
    exact: true
  },
  {
    path: '/blog/2015/05/01/',
    component: ComponentCreator('/blog/2015/05/01/','cb2'),
    exact: true
  },
  {
    path: '/blog/2016/04/01/',
    component: ComponentCreator('/blog/2016/04/01/','3d4'),
    exact: true
  },
  {
    path: '/blog/2016/05/01/',
    component: ComponentCreator('/blog/2016/05/01/','268'),
    exact: true
  },
  {
    path: '/blog/2017/06/01/',
    component: ComponentCreator('/blog/2017/06/01/','64e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','fbd'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','cd5'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Middle East Studies/IranMilitary',
        component: ComponentCreator('/docs/Middle East Studies/IranMilitary','1bd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Middle East Studies/Whiplash',
        component: ComponentCreator('/docs/Middle East Studies/Whiplash','50c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Science and Tech Policy/Article Review - Economic Metrics',
        component: ComponentCreator('/docs/Science and Tech Policy/Article Review - Economic Metrics','d13'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/World War I/WWI_Review_01',
        component: ComponentCreator('/docs/World War I/WWI_Review_01','498'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/World War I/WWI_Review_02',
        component: ComponentCreator('/docs/World War I/WWI_Review_02','1f0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/World War I/WWI_Review_03',
        component: ComponentCreator('/docs/World War I/WWI_Review_03','3a0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/World War I/WWI_Review_04',
        component: ComponentCreator('/docs/World War I/WWI_Review_04','032'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
