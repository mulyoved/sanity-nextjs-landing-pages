// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

import artist from './documents/artist'
import show from './documents/show'
import performance from './documents/performance'

// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'

// Landing page sections
import hero from './objects/hero'
import imageSection from './objects/imageSection'
import text3Images from './objects/text3Images'
import responsiveGrid from './objects/responsiveGrid'
import paymentSection from './objects/paymentSection'
import textSection from './objects/textSection'
import FPHero from './objects/fp-hero'
import FPArtists from './objects/fp-artists'
import FPSubscribe from './objects/fp-subscribe'
import FPUpcoming from './objects/fp-upcoming'
import gridImage from './objects/grid-image'
import FPVideo from './objects/fp-video'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    text3Images,
    responsiveGrid,
    paymentSection,
    internalLink,
    link,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection,

    gridImage,

    FPHero,
    FPArtists,
    FPSubscribe,
    FPUpcoming,
    FPVideo,

    artist,
    show,
    performance,
  ]),
})
