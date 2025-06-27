import React from 'react'

import FeatureHomeOne from '../home/FeatureHomeOne'
import AboutHomeOne from '../home/AboutHomeOne'
import CounterHomeOne from '../home/CounterHomeOne'
import CourseCategoryHomeOne from '../home/CourseCategoryHomeOne'
import WorkingProcessHomeOne from '../home/WorkingProcessHomeOne'
import InstructorsHomeOne from '../home/InstructorsHomeOne'
import ReviewHomeOne from '../home/ReviewHomeOne'
import BlogHomeOne from '../home/BlogHomeOne'

import FaqHomeTwo from './FaqHomeTwo'
import CoursesHomeTwo from './CoursesHomeTwo'
import BrandHomeTwo from './BrandHomeTwo'
import HeroHomeTwo from './HeroHomeTwo'
import CtaHomeTwo from './CtaHomeTwo'

import HeaderTwo from '@/layouts/headers/HeaderTwo'
import FooterOne from '@/layouts/footer'

export default function HomeTwo() {
  return (
    <>
      <HeaderTwo />
      <HeroHomeTwo />
      <BrandHomeTwo />
      <FeatureHomeOne style_2={true} />
      <AboutHomeOne />
      <CounterHomeOne />
      <CoursesHomeTwo />
      <CourseCategoryHomeOne />
      <WorkingProcessHomeOne />
      <InstructorsHomeOne style_2={true} />
      <FaqHomeTwo />
      <ReviewHomeOne />
      <BlogHomeOne />
      <CtaHomeTwo />
      <FooterOne />
    </>
  )
}
