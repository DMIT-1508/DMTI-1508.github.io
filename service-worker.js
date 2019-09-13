/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "02694846523be829fa6339bebbaa0056"
  },
  {
    "url": "about/index.html",
    "revision": "18dd30f55bd709e29e4eca0b51279d9c"
  },
  {
    "url": "about/LOGs.html",
    "revision": "0caff7995e70b1b5766e0a5db6fb54b6"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.29f85ca9.css",
    "revision": "5cbc03fdd81b4e76ea24ab883a4980ef"
  },
  {
    "url": "assets/img/CustomerOrdersView.6311d5d4.png",
    "revision": "6311d5d419093fd2e1ad7a6b03b308ec"
  },
  {
    "url": "assets/img/ESP-1-ERD-CustomerOrdersView.40628f59.png",
    "revision": "40628f5970c156e3e1c3614ab8353341"
  },
  {
    "url": "assets/img/ESP-2-ERD-PaymentLogView.3f72a51c.png",
    "revision": "3f72a51c875f924d916787c0d69da45d"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-A.60658a0d.png",
    "revision": "60658a0da24855d4a15c767972abbfd8"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-B.38eedb63.png",
    "revision": "38eedb63265a820934ebdcb645f0917d"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-C.57734797.png",
    "revision": "5773479785995bda45c142c6574be0dd"
  },
  {
    "url": "assets/img/ESP-3-ERD-Inventory-Control-View.035f952a.png",
    "revision": "035f952a5c1510c52cfb8063aead6eb2"
  },
  {
    "url": "assets/img/ESP-3-ERD-Purchase-Orders-View.a538692a.png",
    "revision": "a538692a19b1db735c47c22623362e88"
  },
  {
    "url": "assets/img/ESP-3-Inventory-Control-View.a6309142.png",
    "revision": "a63091421adb8b779bd31748de46d211"
  },
  {
    "url": "assets/img/ESP-3-Purchase-Orders-View.56b0efed.png",
    "revision": "56b0efed3a25ca6688515447086bd0a6"
  },
  {
    "url": "assets/img/ESP-4-Cheque-Register-View.b55c141a.png",
    "revision": "b55c141a089c58ca93c4ee1a1a1692f7"
  },
  {
    "url": "assets/img/ESP-4-ERD-Cheque-Register-View.5dce58fc.png",
    "revision": "5dce58fcc57eec752e7059eeda0e4f34"
  },
  {
    "url": "assets/img/ESP-5-ERD-OrderShipment.48f96eda.png",
    "revision": "48f96eda9d4d9e8ad8d95908d38f3e99"
  },
  {
    "url": "assets/img/ESP-5-Order-Shipment-View.6bb435b4.png",
    "revision": "6bb435b4c8168c378bfa599ef80c4632"
  },
  {
    "url": "assets/img/ESP-6-Driver-Details-View.90181f44.png",
    "revision": "90181f44628c808d5658b50eb0fb4a28"
  },
  {
    "url": "assets/img/ESP-6-ERD-Driver-Details-View.a66d7cc0.png",
    "revision": "a66d7cc0c42d116e7e722cb9aa6d4f1a"
  },
  {
    "url": "assets/img/ESP-Merge-With-ESP-3.ffca8ca0.png",
    "revision": "ffca8ca0cc7040a1163e04196c3f3526"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-1.685f2816.png",
    "revision": "685f281667153030ac47c5dd53a03c98"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-2.beecb18b.png",
    "revision": "beecb18b0dd7a0f1f9eedd4e3653d2a5"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-3.9d5b39aa.png",
    "revision": "9d5b39aa64ba764c17acd05a3dd42aaf"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-4.b375e458.png",
    "revision": "b375e458737fa6b3af034b87361af987"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical.8a64b161.png",
    "revision": "8a64b161121f1b02d0bd8d5a7bd8f3f4"
  },
  {
    "url": "assets/img/ESP-Physical-ERD.8a64b161.png",
    "revision": "8a64b161121f1b02d0bd8d5a7bd8f3f4"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-1.685f2816.png",
    "revision": "685f281667153030ac47c5dd53a03c98"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-2.beecb18b.png",
    "revision": "beecb18b0dd7a0f1f9eedd4e3653d2a5"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-3.9d5b39aa.png",
    "revision": "9d5b39aa64ba764c17acd05a3dd42aaf"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-4.b375e458.png",
    "revision": "b375e458737fa6b3af034b87361af987"
  },
  {
    "url": "assets/img/ESP.fb67f7da.png",
    "revision": "fb67f7da9ac37ca9287672e0a2bd610e"
  },
  {
    "url": "assets/img/IQSchool-ERD.9589c95f.png",
    "revision": "9589c95f711c7726c88b9d1d1cb5c52c"
  },
  {
    "url": "assets/img/IQSchool-ERD.f2f3ede0.png",
    "revision": "f2f3ede04ac83e7ec400ffd56e59f45d"
  },
  {
    "url": "assets/img/Logical-ERD.2053813d.svg",
    "revision": "2053813d8e67dea7ae14019be06aa316"
  },
  {
    "url": "assets/img/Merge-ESP-1and2.cd8ae504.png",
    "revision": "cd8ae50456d45d43430845bcf14ec328"
  },
  {
    "url": "assets/img/SampleForm.9387c4d4.png",
    "revision": "9387c4d460c5493156564791ecaeeb7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/view1.fa1dab5e.png",
    "revision": "fa1dab5eccde499b8ff8a02d5d4cf701"
  },
  {
    "url": "assets/img/view2.440b8485.png",
    "revision": "440b8485c7ea8e4368dc90a0e4834408"
  },
  {
    "url": "assets/js/1.dc025775.js",
    "revision": "e8a327c2ec4384971456ee9df30396d4"
  },
  {
    "url": "assets/js/10.2dce0e33.js",
    "revision": "f1c1d0e4bcf8b2e0433eb4755524718b"
  },
  {
    "url": "assets/js/11.a0012d97.js",
    "revision": "421ac6d28390cb771f3e021387eb2aed"
  },
  {
    "url": "assets/js/12.e9d882b4.js",
    "revision": "16075016f088372ed3cf449f10dab28e"
  },
  {
    "url": "assets/js/13.919e92cf.js",
    "revision": "002eb7b7f2bb9e500b2758a15759794e"
  },
  {
    "url": "assets/js/14.ab0f0b46.js",
    "revision": "35f40003ec3983b3d451a8fac82c1dcd"
  },
  {
    "url": "assets/js/15.9eb5de3f.js",
    "revision": "7b8b844e5700f2fd4bdbc4cab64c3c4b"
  },
  {
    "url": "assets/js/16.2372b3aa.js",
    "revision": "ef8260b53b4d58aeec5d760cb6b20bfa"
  },
  {
    "url": "assets/js/17.52de949a.js",
    "revision": "82b706876e206d89979fc2f0eb8a65e0"
  },
  {
    "url": "assets/js/18.35c87bec.js",
    "revision": "8a21454285f37ac38fc31e0a25845b3e"
  },
  {
    "url": "assets/js/19.12e58cfb.js",
    "revision": "19195a6ec50fefec876e17bab4b9a8a8"
  },
  {
    "url": "assets/js/2.fa38e49b.js",
    "revision": "a3f2d8f8ad5f4575037186287b50d167"
  },
  {
    "url": "assets/js/20.04c15f4c.js",
    "revision": "9c1c60ac4ed0052d575e93d7f616b1b6"
  },
  {
    "url": "assets/js/21.a28c2be3.js",
    "revision": "f3b3a3c0d3c4f7a30081bd22b1c4a53b"
  },
  {
    "url": "assets/js/22.2870532b.js",
    "revision": "924d20af262d7a28bd59f7c664ad162b"
  },
  {
    "url": "assets/js/23.2668a31a.js",
    "revision": "f7d3b99a6bac601200fdb1d6ba39d517"
  },
  {
    "url": "assets/js/24.28396661.js",
    "revision": "2086811cb22291a90a42454870ff3a7d"
  },
  {
    "url": "assets/js/25.dba4854d.js",
    "revision": "c8381b494f4fa8fc15bc133d1547a0c6"
  },
  {
    "url": "assets/js/26.c2992801.js",
    "revision": "346b8c2ab1ef7b634e6ccbf4e9118b58"
  },
  {
    "url": "assets/js/27.dec3b092.js",
    "revision": "7d409ae5efaabc74e0657d91b9e22b5e"
  },
  {
    "url": "assets/js/28.d4e58c7b.js",
    "revision": "45d8505e7faac300b50e048457fd22b1"
  },
  {
    "url": "assets/js/29.b3725770.js",
    "revision": "644dc23cb69b73ddf6410cb6f9478aef"
  },
  {
    "url": "assets/js/3.249150de.js",
    "revision": "40d683f1f994d1093963d527b72be0ea"
  },
  {
    "url": "assets/js/30.277018e7.js",
    "revision": "e45c512130b1d38559ebcd1ea247107b"
  },
  {
    "url": "assets/js/31.1c36d19d.js",
    "revision": "07b14a15fc154ab15643920a88ca22b5"
  },
  {
    "url": "assets/js/32.85541070.js",
    "revision": "6f59254e5e883bd3b6610e6bb2c60d0e"
  },
  {
    "url": "assets/js/33.3016cfe0.js",
    "revision": "3109c2fca0191f1f678b9b3ddb9b613a"
  },
  {
    "url": "assets/js/34.7ecab17c.js",
    "revision": "a0f49fcd01dd72d9d9585b29eec43b24"
  },
  {
    "url": "assets/js/35.779af5a1.js",
    "revision": "6f175a80c74eaae29b1a500a19c1189f"
  },
  {
    "url": "assets/js/36.5eca2943.js",
    "revision": "4be426bf8086793b2a4464226ab8bae8"
  },
  {
    "url": "assets/js/37.1cf5878b.js",
    "revision": "ec2bbce3dc933268d1f80fc325651ffa"
  },
  {
    "url": "assets/js/38.d3875e44.js",
    "revision": "f3e3ae97789efae931bfa51b2c3cd24a"
  },
  {
    "url": "assets/js/39.b55d93c4.js",
    "revision": "9be44f6e472cc81d8fbed79babe22baa"
  },
  {
    "url": "assets/js/4.34f9d3ab.js",
    "revision": "0220625ffa43c8fd0b4539d6ff8553b6"
  },
  {
    "url": "assets/js/40.ad270bd5.js",
    "revision": "ca9eb3a5a7fc85775a3d4836a98911de"
  },
  {
    "url": "assets/js/41.c00e986e.js",
    "revision": "52560a0f7ea0c649a3a8ca98295ae2b2"
  },
  {
    "url": "assets/js/42.d715d014.js",
    "revision": "3feb6a3086ff919095bee603348b10ef"
  },
  {
    "url": "assets/js/43.12074edf.js",
    "revision": "e5f01d0b58d9ca6db0dd9bd3790a8527"
  },
  {
    "url": "assets/js/44.a305fd8d.js",
    "revision": "ea964a4daecee280ff94c17e9557bfd8"
  },
  {
    "url": "assets/js/45.ca79e2f5.js",
    "revision": "8739a2c8e5bca7454e6bb94a1732f8fc"
  },
  {
    "url": "assets/js/46.14ed7f2c.js",
    "revision": "9967386eab627369a4f45c5fb86637e5"
  },
  {
    "url": "assets/js/47.e0c73412.js",
    "revision": "015c52df3b569986fc18fc4c8d727761"
  },
  {
    "url": "assets/js/48.14684aeb.js",
    "revision": "d5934fdeaf82268f292b653ce0bb931c"
  },
  {
    "url": "assets/js/49.156077e6.js",
    "revision": "76ed1ed44869a8c2c2dcabd9655732e5"
  },
  {
    "url": "assets/js/5.24cf48d9.js",
    "revision": "0f33c900da70084646aa015c4d8d784a"
  },
  {
    "url": "assets/js/50.0f05c67c.js",
    "revision": "f14d662ef886af9ef8926d77ac94ef71"
  },
  {
    "url": "assets/js/51.d415e61d.js",
    "revision": "e9c69182f011884af77bb97dbb6bc073"
  },
  {
    "url": "assets/js/52.d7c65ca9.js",
    "revision": "ce06366fb318e0978df111999e0a41e9"
  },
  {
    "url": "assets/js/53.b237f819.js",
    "revision": "3d63a26847e796c955db0027f2eadc6f"
  },
  {
    "url": "assets/js/54.a8b408fa.js",
    "revision": "f27f5c629cd36097eb751743a587843d"
  },
  {
    "url": "assets/js/55.9078508e.js",
    "revision": "13c999a50d4ffd721990647352de26b9"
  },
  {
    "url": "assets/js/56.625cfb71.js",
    "revision": "1c36c4c068fa314060aad0e5d97fa883"
  },
  {
    "url": "assets/js/57.f1c4e72e.js",
    "revision": "c048fc8e8fcc64f33008dcfe6674bce1"
  },
  {
    "url": "assets/js/58.a086e63e.js",
    "revision": "f9d8c0e85fca8b001a111434d9ef9009"
  },
  {
    "url": "assets/js/59.062d5b15.js",
    "revision": "16be7dc53320c4152093420dd7ab974a"
  },
  {
    "url": "assets/js/6.7ecb3584.js",
    "revision": "01559d4b2539699a7eaeecff9353d4cf"
  },
  {
    "url": "assets/js/60.cfb8e70d.js",
    "revision": "dd0ee377d0969b9cbde4da8a407f06ce"
  },
  {
    "url": "assets/js/61.77723d14.js",
    "revision": "dc145fc6c55825fb0ae2dbd70727786c"
  },
  {
    "url": "assets/js/62.281d4369.js",
    "revision": "2d1fb3a657dd43b2a79e57bb92e8afce"
  },
  {
    "url": "assets/js/63.f0174429.js",
    "revision": "cd6802fd0add73991319f769f9657454"
  },
  {
    "url": "assets/js/64.070a85b0.js",
    "revision": "6fb711da7691a106c7e26d10574e1c01"
  },
  {
    "url": "assets/js/65.48be2272.js",
    "revision": "806cb0fec4bf572bbe2e8affa5e4b427"
  },
  {
    "url": "assets/js/66.890930c5.js",
    "revision": "119971d0399d46b181c74eab79fa55f6"
  },
  {
    "url": "assets/js/67.b45468e6.js",
    "revision": "92f9df1d2dea3b23327be0553468feea"
  },
  {
    "url": "assets/js/68.fd3a98c3.js",
    "revision": "3ee6a46da47fdae012b2e8569d5c691d"
  },
  {
    "url": "assets/js/69.2983863a.js",
    "revision": "ad31456ba42c62912a5bcb4e801b5214"
  },
  {
    "url": "assets/js/7.c7eeb577.js",
    "revision": "47ba3c2e01d4473d4e7a13ae97642c98"
  },
  {
    "url": "assets/js/70.e5011d38.js",
    "revision": "a39222778ec1bbc8c0c3ef842ead09c8"
  },
  {
    "url": "assets/js/8.168aff09.js",
    "revision": "e9f564d4fec55c5246c67366266c3501"
  },
  {
    "url": "assets/js/9.8e625da5.js",
    "revision": "bb0dc08730e294aae5c814ddc5d1dc58"
  },
  {
    "url": "assets/js/app.bdb07459.js",
    "revision": "fa34f51f871faa3061fcd15e9116fbd9"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "6abbbe31deefa4ef5172794f1a78996f"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "e8c91c234d7f3c04f1467af0d0033ded"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "fd6c5d26df183774dfcff4dbb069f106"
  },
  {
    "url": "DDL/createView.html",
    "revision": "df67fdf116c7097adaff2accc0878d31"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "35c1da7fcc2e66a8169cd689c0b526f9"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "2c8cf740e7b3158608509547573727c8"
  },
  {
    "url": "DDL/index.html",
    "revision": "71bcb5d7ed6810c8d8052044541900a8"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "ec07e996d8f7cbeb7e03d2347f49c208"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "ff600c406c6c76f3768b370d33b825c4"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "27d9925e9381dc1d0f98c2958cc98c0f"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "412cb5fa0409538e98458c0aa14bffb9"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "7333fd8b41475a724cffb543f1e5e977"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "329e27131cf8ec654ff30bbf4c0eb30e"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "db03622b447cd92178450bdb251ad114"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "40f8304de1f63d0129c75f659a658aeb"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "c5c8605134e9b9945d65085c5f9cc49e"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "0c7bd28b02fbc5fa16e27b765f007976"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "dba451bbbdc916a94a3223b935951538"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "e3d70e76c03afd70ef73a82b2f1fdc85"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "7dae2c3cff8dce43ce8f7fe1eeb91b05"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "564467920063da74699e1d5f41413498"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "11fd153a28426ff6e577292db62aa2f7"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "4a060f2e4f574265f6085673eba73c06"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "1f0b41aaed8f8e1ee6db5d5a94596c5a"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "9f7ac0470b8c10e51ed4c720d2904311"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "9e7203b1abaf1af833a3ea3b77a84357"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "e8a454cadea9e592245883e2de780274"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "a915f39f0c2f2d008a5e545b8640f886"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "800dcb08aac0f8fba41328dddda000bc"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "755cfd871ba1e873a4fe88072d3093ef"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "416e4883c14e5fcfb549419ed289cb44"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "9ca259332194ebf17f7073594e6ef43b"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "0b3f01deb9af448c4221b713849f1575"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "39ed426cadb5bade297fb50f6c057b3a"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "742e3947b3337e2b1f5e9cdf1bf8b5e4"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "59ac1c70f932ed184a22265c487b0567"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "c0b9a4b8f3fbd4f982da151e907b814d"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "ce1bb6dc519760098a616dbd20a9932e"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "08fdf84ab146d36ed9298f05088390a4"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "cd466eed158dd963026009bf9941c532"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "2b1b55a7d2b0431c6ab9d758817a2435"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "a3880ce67ed9a2418607337a318ef5e2"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "e27406c1a3604ef793b4a3ddee558727"
  },
  {
    "url": "Design/index.html",
    "revision": "8ff566a10364850dbeb99e76958ae364"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "314e2300cdd33af6df2c53e8d597922b"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "ce61c78b2448e46dbe11949dcd9b9f49"
  },
  {
    "url": "Design/normalization.html",
    "revision": "68ce52d38b8642ab729c78218075bdb2"
  },
  {
    "url": "DMIT-1508.github.png",
    "revision": "4387056da54af3d8bbcc0d8b2cc3d2c2"
  },
  {
    "url": "DMIT-1508.png",
    "revision": "4f1e0c3d7fd329e2f9d715429f5f3c23"
  },
  {
    "url": "DML/delete.html",
    "revision": "24f5fbde9ea47316b64a0680bb3eaa1c"
  },
  {
    "url": "DML/index.html",
    "revision": "3a44c8cce22dd433a620ff64e895b463"
  },
  {
    "url": "DML/insert.html",
    "revision": "3039027d8653a3167b58b4c4488364c5"
  },
  {
    "url": "DML/update.html",
    "revision": "61fb04d9db976311a8916cf95b1cf1a2"
  },
  {
    "url": "index.html",
    "revision": "d26c700788b18e8eaa957c0e0713fe86"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "e9af4030458c848135d38c99e9991404"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "b5ea48cb7a28fb8b3ba4fb230de4eb3e"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "b55545cadc4f2eb731f6c03660db5b9d"
  },
  {
    "url": "SQL/index.html",
    "revision": "5e29a85a061947b90d67d0d37e8ff1ab"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "3d23455ae8d90b07a90306d6bc3a6e7e"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "a0c8b67771962b0c1a1dfa97d9e8c786"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "e3039154b3265b5d017ca6b3845b0d60"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "e141b74b433e454ccd754d8733e9abc5"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "3fa4c5eb31f6334cb0d5155123c1cd54"
  },
  {
    "url": "SQL/unions.html",
    "revision": "991a921b8396162e04978eb459ef0d74"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "f374eeb1ceea20497db23a8d47c19c06"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
