"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Mountain,
  Building2,
  Clock,
  BookOpen,
  ExternalLink,
  Play,
  Mic,
  History,
  Users2,
  Calendar,
  TrendingUp,
  Bot,
  Brain,
  Target,
  BookOpenCheck,
  BarChart3,
  GraduationCap,
  Heart,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ProductsGridSection() {
  const { t } = useLanguage()

  return (
    <section id="products-grid-section" className="py-20 bg-white w-full">
      <div className="w-full pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* AI Tour Guide Systems */}
          <div id="ai-tour-guide-section" className="mb-20">
            <h2 id="ai-tour-guide-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              {t("products.grid.tour_guide_title")}
            </h2>
            <div className="space-y-8">
              <Card
                id="tengwangge-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden group"
              >
                <div className="relative aspect-video mt-[-24px]">
                  <video
                    id="tengwangge-video"
                    src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg2.mp4"
                    className="w-full h-full object-cover"
                    preload="auto"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture={true}
                    x5-video-player-type="h5"
                    poster="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/videopreview/twg2.jpg"
                  >
                    您的浏览器不支持视频播放。
                  </video>
                  <div className="absolute top-4 left-4">
                    <Badge id="tengwangge-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                      <Building2 className="w-3 h-3 mr-1" />
                      {t("products.tengwangge.heritage_badge")}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle id="tengwangge-title" className="text-2xl font-bold mb-3 flex items-center text-slate-800">
                    <MapPin className="w-6 h-6 mr-2 text-cyan-700" />
                    {t("products.tengwangge.title")}
                  </CardTitle>
                  <CardDescription id="tengwangge-description" className="text-lg leading-relaxed mb-4 text-slate-600">
                    {t("products.tengwangge.description")}
                  </CardDescription>
                  <div id="tengwangge-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge id="tengwangge-voice-badge" variant="outline" className="flex items-center text-slate-600">
                      <Mic className="w-3 h-3 mr-1" />
                      {t("products.tengwangge.voice_badge")}
                    </Badge>
                    <Badge id="tengwangge-history-badge" variant="outline" className="flex items-center text-slate-600">
                      <History className="w-3 h-3 mr-1" />
                      {t("products.tengwangge.history_badge")}
                    </Badge>
                    <Badge
                      id="tengwangge-interaction-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <Users2 className="w-3 h-3 mr-1" />
                      {t("products.tengwangge.interaction_badge")}
                    </Badge>
                  </div>
                  {/* <Button
                    id="tengwangge-learn-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("products.tengwangge.learn_btn")}
                  </Button> */}
                </CardHeader>
              </Card>

              <Card
                id="jinggangshan-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden group"
              >
                <div className="relative aspect-video mt-[-24px]">
                  <video
                    id="jgs-video"
                    src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/jgs.mp4"
                    className="w-full h-full object-cover"
                    preload="auto"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture={true}
                    x5-video-player-type="h5"
                    poster="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/videopreview/jgs_index.jpg"
                  >
                    您的浏览器不支持视频播放。
                  </video>
                  <div className="absolute top-4 left-4">
                    <Badge id="jinggangshan-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                      <Mountain className="w-3 h-3 mr-1" />
                      {t("products.jinggangshan.heritage_badge")}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle
                    id="jinggangshan-title"
                    className="text-2xl font-bold mb-3 flex items-center text-slate-800"
                  >
                    <Mountain className="w-6 h-6 mr-2 text-cyan-700" />
                    {t("products.jinggangshan.title")}
                  </CardTitle>
                  <CardDescription
                    id="jinggangshan-description"
                    className="text-lg leading-relaxed mb-4 text-slate-600"
                  >
                    {t("products.jinggangshan.description")}
                  </CardDescription>
                  <div id="jinggangshan-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      id="jinggangshan-education-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <GraduationCap className="w-3 h-3 mr-1" />
                      {t("products.jinggangshan.education_badge")}
                    </Badge>
                    <Badge
                      id="jinggangshan-history-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <History className="w-3 h-3 mr-1" />
                      {t("products.jinggangshan.history_badge")}
                    </Badge>
                    <Badge
                      id="jinggangshan-patriotism-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <Heart className="w-3 h-3 mr-1" />
                      {t("products.jinggangshan.patriotism_badge")}
                    </Badge>
                  </div>
                  {/* <Button
                    id="jinggangshan-learn-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("products.jinggangshan.learn_btn")}
                  </Button> */}
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Smart Interaction */}
          <div id="smart-interaction-section" className="mb-20">
            <h2 id="smart-interaction-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              {t("products.grid.smart_interaction_title")}
            </h2>
            <div className="space-y-8">
              <Card
                id="smart-pavilion-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-video mt-[-24px]">
                  <video
                    id="tengwangge-recite-video"
                    src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/tengwangge2.mp4"
                    className="w-full h-full object-cover"
                    preload="auto"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture={true}
                    x5-video-player-type="h5"
                    poster="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/videopreview/twg.jpg"
                  >
                    您的浏览器不支持视频播放。
                  </video>
                  <div className="absolute top-4 left-4">
                    <Badge id="smart-pavilion-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                      <Building2 className="w-3 h-3 mr-1" />
                      {t("products.pavilion.heritage_badge")}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle
                    id="smart-pavilion-title"
                    className="text-2xl font-bold mb-3 flex items-center text-slate-800"
                  >
                    <Building2 className="w-6 h-6 mr-2 text-cyan-700" />
                    {t("products.pavilion.title")}
                  </CardTitle>
                  <CardDescription
                    id="smart-pavilion-description"
                    className="text-lg leading-relaxed mb-4 text-slate-600"
                  >
                    {t("products.pavilion.description")}
                  </CardDescription>
                  <div id="smart-pavilion-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge id="pavilion-poetry-badge" variant="outline" className="flex items-center text-slate-600">
                      <BookOpenCheck className="w-3 h-3 mr-1" />
                      {t("products.pavilion.poetry_badge")}
                    </Badge>
                    <Badge id="pavilion-education-badge" variant="outline" className="flex items-center text-slate-600">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      {t("products.pavilion.education_badge")}
                    </Badge>
                    <Badge id="pavilion-tutoring-badge" variant="outline" className="flex items-center text-slate-600">
                      <Bot className="w-3 h-3 mr-1" />
                      {t("products.pavilion.tutoring_badge")}
                    </Badge>
                  </div>
                  {/* <Button
                    id="smart-pavilion-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("products.pavilion.experience_btn")}
                  </Button> */}
                </CardHeader>
                {/* Tengwangge Media Coverage Section */}
                <div
                  id="tengwangge-media-coverage"
                  className="pl-8 pr-8 w-full"
                >
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    {t("products.tengwangge.media_title")}
                  </h3>
                  <div className="relative overflow-hidden w-full">
                    <div className="flex animate-marquee space-x-8 whitespace-nowrap w-max pb-4">
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://mp.weixin.qq.com/s/QCTv52y__Nm7hty5fxw9cQ"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/0.png"
                          alt={t("products.tengwangge.media0.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="http://wx0970ecdf50b47253.h2.0791look.com/app/?p=cloud&amp;id=949387"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/1.png"
                          alt={t("products.tengwangge.media1.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://mp.weixin.qq.com/s/03vz4t5icZfC1r03WwBo4g"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/2.png"
                          alt={t("products.tengwangge.media2.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://www.thepaper.cn/newsDetail_forward_22915007"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/3.png"
                          alt={t("products.tengwangge.media3.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://www.ncnews.com.cn/xwzx/ncxw/jrnc/202304/t20230429_1962618.html"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/4.png"
                          alt={t("products.tengwangge.media4.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://baijiahao.baidu.com/s?id=1764949469196855975&amp;wfr=spider&amp;for=pc"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/5.png"
                          alt={t("products.tengwangge.media5.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://www.163.com/dy/article/I3J4PSAH0514VRU5.html"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/6.png"
                          alt={t("products.tengwangge.media6.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://new.qq.com/rain/a/20230501A03E8C00"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/7.png"
                          alt={t("products.tengwangge.media7.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://baijiahao.baidu.com/s?id=1764836824594988365&amp;wfr=spider&amp;for=pc"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/8.png"
                          alt={t("products.tengwangge.media8.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://www.163.com/dy/article/I3SMF3BE0550TYQ0.html"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/9.png"
                          alt={t("products.tengwangge.media9.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://www.sohu.com/a/672186970_121119239"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/10.png"
                          alt={t("products.tengwangge.media10.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <a target="_blank" href="https://news.dayoo.com/society/202305/01/140000_54466764.htm"><img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg_media_list/11.png"
                          alt={t("products.tengwangge.media11.name")}
                          className="w-48 h-30 object-contain rounded-lg"
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card
                id="lushi-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden group"
              >
                <div className="relative aspect-video mt-[-24px]">
                  <img
                    id="lushi-image"
                    src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lawyer_index.png"
                    alt="律时"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge id="lushi-time-badge" className="bg-blue-500 hover:bg-blue-600">
                      <Clock className="w-3 h-3 mr-1" />
                      {t("products.lushi.time_badge")}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle id="lushi-title" className="text-2xl font-bold mb-3 flex items-center text-slate-800">
                    <Clock className="w-6 h-6 mr-2 text-cyan-700" />
                    {t("products.lushi.title")}
                  </CardTitle>
                  <CardDescription id="lushi-description" className="text-lg leading-relaxed mb-4 text-slate-600">
                    {t("products.lushi.description")}
                  </CardDescription>
                  <div id="lushi-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge id="lushi-planning-badge" variant="outline" className="flex items-center text-slate-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      {t("products.lushi.planning_badge")}
                    </Badge>
                    <Badge id="lushi-efficiency-badge" variant="outline" className="flex items-center text-slate-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {t("products.lushi.efficiency_badge")}
                    </Badge>
                    <Badge id="lushi-assistant-badge" variant="outline" className="flex items-center text-slate-600">
                      <Bot className="w-3 h-3 mr-1" />
                      {t("products.lushi.assistant_badge")}
                    </Badge>
                  </div>
                  {/* <Button
                    id="lushi-demo-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {t("products.lushi.demo_btn")}
                  </Button> */}
                </CardHeader>
                {/* Lushi Media Coverage Section */}
                  <div
                    id="lushi-media-coverage"
                    className="pl-8 pr-8 w-full"
                  >
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                      {t("products.lushi.media_title")}
                    </h3>
                    <div className="relative overflow-hidden">
                      <div className="flex animate-marquee space-x-8 whitespace-nowrap pb-4">
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <a target="_blank" href="http://www.mzyfz.com/html/2166/2023-05-23/content-1591811.html"><img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lvshi_media_list/0.png"
                            alt={t("products.lushi.media.legal_daily.name")}
                            className="w-48 h-30 object-contain rounded-lg"
                          /></a>
                        </div>
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <a target="_blank" href="https://jxcbw.cn/newsContentM?newsid=1659380993926176770"><img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lvshi_media_list/1.png"
                            alt={t("products.lushi.media.china_lawyer.name")}
                            className="w-48 h-30 object-contain rounded-lg"
                          /></a>
                        </div>
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <a target="_blank" href="http://www.jnds.com.cn/system/2023/05/19/030227756.shtml"><img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lvshi_media_list/2.png"
                            alt={t("products.lushi.media.jiangxi_legal.name")}
                            className="w-48 h-30 object-contain rounded-lg"
                          /></a>
                        </div>
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <a target="_blank" href="http://www.jxxw.com.cn/index.php/welcome/index?spm=vbckcyetcl.0.0.1.iDA8bM&amp;channelId=10099"><img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lvshi_media_list/3.png"
                            alt={t("products.lushi.media.shenzhen_daily.name")}
                            className="w-48 h-30 object-contain rounded-lg"
                          /></a>
                        </div>
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <a target="_blank" href="https://mp.weixin.qq.com/s/jTXwv5a02lJixkFIlBqhgQ"><img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lvshi_media_list/4.png"
                            alt={t("products.lushi.media.nanchang_daily.name")}
                            className="w-48 h-30 object-contain rounded-lg"
                          /></a>
                        </div>
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <a target="_blank" href="https://www.toutiao.com/article/7234791157681668663/?app=news_article&amp;timestamp=1684552023&amp;use_new_style=1&amp;req_id=2023052011070371300D11C202FF44D765&amp;group_id=7234791157681668663&amp;share_token=6DAFE56C-BFD2-44A0-98B7-F0E4621638DD&amp;tt_from=weixin&amp;utm_source=weixin&amp;utm_medium=toutiao_ios&amp;utm_campaign=client_share&amp;wxshare_count=1&amp;source=m_redirect&amp;wid=1685080501500"><img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lvshi_media_list/5.png"
                            alt={t("products.lushi.media.nanchang_daily.name")}
                            className="w-48 h-30 object-contain rounded-lg"
                          /></a>
                        </div>
                      </div>
                    </div>
                  </div>
              </Card>
            </div>
          </div>

          {/* Reading Products */}
          <div id="reading-products-section" className="mb-20">
            <h2 id="reading-products-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              {t("products.grid.reading_products_title")}
            </h2>
            <Card
              id="smart-reading-card"
              className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-video mt-[-24px]">
                <video
                  id="reading-video"
                  src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/znpt.mp4"
                  className="w-full h-full object-cover"
                  preload="auto"
                  controls
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture={true}
                  x5-video-player-type="h5"
                  poster="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/videopreview/read.jpg"
                >
                  您的浏览器不支持视频播放。
                </video>
                <div className="absolute top-4 left-4">
                  <Badge id="smart-reading-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {t("products.reading.smart_badge")}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-8 flex flex-col justify-center">
                <CardTitle
                  id="smart-reading-title"
                  className="text-3xl font-bold mb-4 flex items-center text-slate-800"
                >
                  <BookOpen className="w-8 h-8 mr-3 text-cyan-700" />
                  {t("products.reading.title")}
                </CardTitle>
                <CardDescription id="smart-reading-description" className="text-lg leading-relaxed mb-6 text-slate-600">
                  {t("products.reading.description")}
                </CardDescription>
                <div id="smart-reading-features" className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    id="reading-recommendation-badge"
                    variant="outline"
                    className="flex items-center text-slate-600"
                  >
                    <Target className="w-3 h-3 mr-1" />
                    {t("products.reading.recommendation_badge")}
                  </Badge>
                  <Badge id="reading-knowledge-badge" variant="outline" className="flex items-center text-slate-600">
                    <Brain className="w-3 h-3 mr-1" />
                    {t("products.reading.knowledge_badge")}
                  </Badge>
                  <Badge id="reading-personalized-badge" variant="outline" className="flex items-center text-slate-600">
                    <Users2 className="w-3 h-3 mr-1" />
                    {t("products.reading.personalized_badge")}
                  </Badge>
                  <Badge id="reading-analysis-badge" variant="outline" className="flex items-center text-slate-600">
                    <BarChart3 className="w-3 h-3 mr-1" />
                    {t("products.reading.analysis_badge")}
                  </Badge>
                </div>
                <div id="smart-reading-actions" className="space-y-3">
                  {/* <Button
                    id="smart-reading-experience-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("products.reading.experience_btn")}
                  </Button> */}
                  <div id="smart-reading-qr" className="text-center">
                    <p className="text-slate-600 text-center">{t("products.reading.qr_text")}</p>
                    <div
                      id="smart-reading-qr-placeholder"
                      className="inline-flex items-center justify-center w-40 h-40 bg-gray-100 rounded-lg text-center"
                    >
                      <img src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/xcxewm.png"/>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Demo Videos */}
          <div id="demo-videos-section" className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 lg:p-12">
            <h3 id="demo-videos-title" className="text-2xl font-bold text-slate-800 mb-8 text-center">
              {t("products.grid.demo_videos_title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div id="demo1-container" className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <video
                  id="cctv1-video"
                  src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/20240406.mp4"
                  className="w-full h-full object-cover"
                  preload="auto"
                  controls
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture={true}
                  x5-video-player-type="h5"
                  poster="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/videopreview/cctv1.jpg"
                >
                  您的浏览器不支持视频播放。
                </video>
              </div>
              <div id="demo2-container" className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <video
                  id="cctv2-video"
                  src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/20250706.mp4"
                  className="w-full h-full object-cover"
                  preload="auto"
                  controls
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture={true}
                  x5-video-player-type="h5"
                  poster="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/videopreview/cctv2.jpg"
                >
                  您的浏览器不支持视频播放。
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
