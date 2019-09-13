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
    "revision": "c96643daf826bc204ef117ee89da432d"
  },
  {
    "url": "about/index.html",
    "revision": "0bef876c7bff68b32a12589b73698553"
  },
  {
    "url": "about/LOGs.html",
    "revision": "685256c261afea94d000afa73d6fc552"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.8e5c9118.css",
    "revision": "d568df8be6aaa8951035984ab76db55c"
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
    "url": "assets/js/11.b6ed3b50.js",
    "revision": "36715899eeb3742dd83b681582a49f0c"
  },
  {
    "url": "assets/js/12.41b39cb6.js",
    "revision": "fd66fe5e9f10f0f81e45d35d2e083ee8"
  },
  {
    "url": "assets/js/13.fb2bb4ab.js",
    "revision": "8629ce55e71385b38c19e474f10ad1d0"
  },
  {
    "url": "assets/js/14.6db8c7d7.js",
    "revision": "6923fa5e40d4af46493e89253016be58"
  },
  {
    "url": "assets/js/15.a403eb92.js",
    "revision": "c4d091cbb1350823a3e8d46397a88916"
  },
  {
    "url": "assets/js/16.3a756220.js",
    "revision": "1f7854f3fb4b57a47ee9e24f01384b88"
  },
  {
    "url": "assets/js/17.0c01a66e.js",
    "revision": "421c8ba1b67db0042fe76ba2ff14bf32"
  },
  {
    "url": "assets/js/18.5a152352.js",
    "revision": "9a52d538ca6238a730a99a146119b9e6"
  },
  {
    "url": "assets/js/19.5a875850.js",
    "revision": "821b7aa755040924883318c1ee0699f8"
  },
  {
    "url": "assets/js/2.fa38e49b.js",
    "revision": "a3f2d8f8ad5f4575037186287b50d167"
  },
  {
    "url": "assets/js/20.ad8e98c6.js",
    "revision": "b5ed5bd51bf4916cb5fa9361c534ac5a"
  },
  {
    "url": "assets/js/21.7fec2058.js",
    "revision": "b0e53ff403fa77e6a656b787485125ce"
  },
  {
    "url": "assets/js/22.4d4751fd.js",
    "revision": "0e3aa01dc16a1f8b662aea34d7795d02"
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
    "url": "assets/js/25.e947cf99.js",
    "revision": "2ba306b474a4a6ae6f684832159e4af3"
  },
  {
    "url": "assets/js/26.d920387a.js",
    "revision": "c8d80fc7142950fb8d5046ac3aa0f599"
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
    "url": "assets/js/5.8aad0280.js",
    "revision": "5292fdd544f1d419d8fbccd558c48439"
  },
  {
    "url": "assets/js/50.93cb1eed.js",
    "revision": "4a4f0bce41ce452b83df9760c97b078f"
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
    "url": "assets/js/6.52803ee2.js",
    "revision": "0688995a2dae52d56e20cdc5c1d382cf"
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
    "url": "assets/js/66.af29ceb9.js",
    "revision": "f536f7d02b32d8efd6d47a2b42535f93"
  },
  {
    "url": "assets/js/67.f44f27c1.js",
    "revision": "397bac1a2f8357b7ea5eb79c4d297782"
  },
  {
    "url": "assets/js/68.b9824158.js",
    "revision": "bcbfeb95500c4d0093c07ba165aadf43"
  },
  {
    "url": "assets/js/69.7fed8bcf.js",
    "revision": "1f7c7e177251e8795b12ed9cc26ddaad"
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
    "url": "assets/js/8.a8cf5ffa.js",
    "revision": "c9350511258a6b939c1f1742c0ae3678"
  },
  {
    "url": "assets/js/9.8e625da5.js",
    "revision": "bb0dc08730e294aae5c814ddc5d1dc58"
  },
  {
    "url": "assets/js/app.4b5bc403.js",
    "revision": "28588a9e9efe5bf322651dd151c1865f"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "505e598c931732f319037209dda51ed0"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "34dd072fbb99cd826bcf9edaf20475fe"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "ef9061e25aa7ae1c7be067791385e30f"
  },
  {
    "url": "DDL/createView.html",
    "revision": "3cc1f353a86907d8ca86f1c26c697f71"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "a7fe64e8d201845bcb29a8e5a806606b"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "f312a88819f2e66f920a114e4ce6db81"
  },
  {
    "url": "DDL/index.html",
    "revision": "51355acfe2464832ddcefdd6ded3dae5"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "a758f4a9a53e8fc2b37b67cdee28cc60"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "066c9a32a17895adbf8a1b1e1312c5bd"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "f357b3288e4996d4ef8dd1810ed23877"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "02eac3cb9f168589c85e05201a084346"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "59ad88a135cb4b3657eaaef7dd351875"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "19dda9f7c8a34292398848a88994d8c7"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "44501acd0544517da98791374a347f68"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "c2680da59c7d8620603f72c5bc176311"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "7c6a952ff54bc5d34987ea63f4bdfafc"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "68e928840040e1763342627c3f953265"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "5bc3dddfb48352e8ff89bd7e2a8a97f0"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "524d709066e81d49deb8edc4a3d800cb"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "c0eeac20119ab4056d3004ba0d31b49d"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "cf44cebd31f4ebd9a65feb4954a41234"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "c93176b0ec195989ef06b93ac3a8cc1e"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "85076f25368894170b9b894662649c8c"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "c2503b4773dae659bd5e6a7c7abde6b3"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "0f9f1a69ad7932b247dedbfa4943bcbc"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "e2d68f738e4730787bf58b83928d4971"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "9fd43b745633b381f5a7a59d57a0acfa"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "8f636dbcfbd9c10108783c890c8c33f1"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "640f01c2d93602c75264b47fc90c2e44"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "1a6cec303a9ec78d25bda0fc3baafbfc"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "a1a4799866c23ec41ff3472ad46f90c0"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "1cfd73e1bbbe785337b4023ec568fcce"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "9b3a4f90cd4525d337f6eb1c3ab3721c"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "ced0acd7fc8c624c924dc7ff006843ad"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "4d99408ea8d4e2719f2d4a8fbd802751"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "015e4d0ed4cc1e756544f349c969c08c"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "fa6fe59f41ba13d09c97874e33e77f6a"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "39a5abb79de79ece8c5f813520ff6ec1"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "6557c3e0dfcbcc2032ef494d00da0c99"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "632c11a04e4c2fffb699238e72b26347"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "3fd1cdda00a54e51124c5d166e91c1e5"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "866c0511381feaa0eec154d1a3a31758"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "734d673c79b44dbcaaf0595c403bac93"
  },
  {
    "url": "Design/index.html",
    "revision": "4f3aa992b87fe3b811f35bf4fba77be8"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "69ba113f599079dc7066ec94cfbedbc6"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "a0e0c0af78e0228e4a0c8854fd862361"
  },
  {
    "url": "Design/normalization.html",
    "revision": "2d5250d81e501a2fc7d54c02ac6c4d05"
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
    "revision": "b9e6ef0d5d7b272c138583ff42cfd834"
  },
  {
    "url": "DML/index.html",
    "revision": "8d0102bc1481bc9126ebb1c027ad303a"
  },
  {
    "url": "DML/insert.html",
    "revision": "482020b22ed5971a2e75c5474b965c2b"
  },
  {
    "url": "DML/update.html",
    "revision": "a3f3595c50044bbf33eb03e01734ff4d"
  },
  {
    "url": "index.html",
    "revision": "ca31fb75772d874f611342eae53dc785"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "f1f9cf4a0197e07f0e96f59f9dbfc629"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "1bf58a61bde682b68c554c9b8e274a79"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "55ca184805bc4a697ce7437ed3b1627d"
  },
  {
    "url": "SQL/index.html",
    "revision": "c4088c9dc27eee3a413fda4013985d9e"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "308d276e52ee48d2808b05bf6e5dc418"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "7d4ceddcca6f8e3e8fc5a29d31b973ba"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "5a1ac42fbac08cb97ef36c13c20742aa"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "2e75595c5e1580c138edd915fcbc5c23"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "4186743eeefe7f114164923ad099ec51"
  },
  {
    "url": "SQL/unions.html",
    "revision": "e202bc41ecbf422371a8ca712ca3d494"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "97e24658d1e08787db7ddd22fddd18ea"
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
