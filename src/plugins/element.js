import Vue from 'vue'
import { Header, Container, Image, Row, Col } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/zh-TW'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Header)
Vue.use(Container)
Vue.use(Image)
Vue.use(Row)
Vue.use(Col)
