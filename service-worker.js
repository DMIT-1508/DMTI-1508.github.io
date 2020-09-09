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
    "revision": "88bc98c85659fd1149c2ef85397cd484"
  },
  {
    "url": "about/index.html",
    "revision": "e1bc744688225e15398ade8518450410"
  },
  {
    "url": "about/LOGs.html",
    "revision": "dd02ee551b3d6d631d1f5d9552dbe5b0"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.f478b41c.css",
    "revision": "3c4a7be98a29f497086db6c6f0306464"
  },
  {
    "url": "assets/img/CustomerOrdersView.6311d5d4.png",
    "revision": "6311d5d419093fd2e1ad7a6b03b308ec"
  },
  {
    "url": "assets/img/dbms.cc8d824b.png",
    "revision": "cc8d824b5f6bf7ab4ba2356a20c26093"
  },
  {
    "url": "assets/img/DesignProcess.98d3a5b2.png",
    "revision": "98d3a5b2fa237481264b56581a3c0144"
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
    "url": "assets/img/Logical-ERD.0a4805f7.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
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
    "url": "assets/img/SQL-Developer.c1d66211.png",
    "revision": "c1d6621182bee5a6440137fbedadb37e"
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
    "url": "assets/js/10.91a943ed.js",
    "revision": "5f516a3362e273af35394d2134b018d4"
  },
  {
    "url": "assets/js/11.96baac79.js",
    "revision": "ecb56d776cfb0fb8d4eb925ca8c2a01c"
  },
  {
    "url": "assets/js/12.91d365b6.js",
    "revision": "14d358ab91b7d4461d63c07af012e86e"
  },
  {
    "url": "assets/js/13.625a02d6.js",
    "revision": "a98ddd3d392b4b65832e6b37abaac1bb"
  },
  {
    "url": "assets/js/14.60ea06f9.js",
    "revision": "9e2e3ed456aa1d0a7ba6bb88b832fd79"
  },
  {
    "url": "assets/js/15.f469f844.js",
    "revision": "4d2c1a8f60c898ae06cd10265ea3a506"
  },
  {
    "url": "assets/js/16.31862bfa.js",
    "revision": "74f7e2ab3890ac83e993b2c2b835ca79"
  },
  {
    "url": "assets/js/17.5f3fc0cc.js",
    "revision": "0e7641be2e5fc3779c6ad11853a1f46a"
  },
  {
    "url": "assets/js/18.21782a57.js",
    "revision": "5536c4feda3f4ff4ec06399922b06333"
  },
  {
    "url": "assets/js/19.a2d52899.js",
    "revision": "a2372d28c3b438afe00a47015cf277a4"
  },
  {
    "url": "assets/js/2.7faeb479.js",
    "revision": "9716932e7428c0f47b9342055bb668c1"
  },
  {
    "url": "assets/js/20.eb0fcc54.js",
    "revision": "94b24a90bd43119c4f7db3769e4082c6"
  },
  {
    "url": "assets/js/21.6c33d15d.js",
    "revision": "caf414dfd2180e198a6a1e4c6bbd5d9e"
  },
  {
    "url": "assets/js/22.6509fe12.js",
    "revision": "b50670d704183284d3dc6c47c6322196"
  },
  {
    "url": "assets/js/23.d80e1ec0.js",
    "revision": "a6f40cb8b16f0acf9bb84f1b8cb53cc7"
  },
  {
    "url": "assets/js/24.33833e22.js",
    "revision": "bfec1c57f33707808262bab9cc17833a"
  },
  {
    "url": "assets/js/25.dc808bd3.js",
    "revision": "83e26980c94f8c0355ebc816c7cba094"
  },
  {
    "url": "assets/js/26.f2e44986.js",
    "revision": "96098bc1802d11b0ac547fcca6da6c0e"
  },
  {
    "url": "assets/js/27.8c2c4db1.js",
    "revision": "09593a9451167984e18731477fb491c4"
  },
  {
    "url": "assets/js/28.d838309e.js",
    "revision": "94a8b888b261e16b6245185e2614fb66"
  },
  {
    "url": "assets/js/29.c4af60cc.js",
    "revision": "00d4b9585e461b03945dac0f301cb5bb"
  },
  {
    "url": "assets/js/3.89cc15ef.js",
    "revision": "ac775e70fc2f4129fee4e7152fe7cad3"
  },
  {
    "url": "assets/js/30.7839e170.js",
    "revision": "605d8ce04aeba416035a73e64ad0102c"
  },
  {
    "url": "assets/js/31.9e8d72e0.js",
    "revision": "58e90fb5191a15a3b5bf7bac0b7f9635"
  },
  {
    "url": "assets/js/32.6cc3d055.js",
    "revision": "232fecb56565a4aa45972c5d07c8d08e"
  },
  {
    "url": "assets/js/33.c29ace0c.js",
    "revision": "cea17df0807502d7a79310a3dfa8c102"
  },
  {
    "url": "assets/js/34.b7726820.js",
    "revision": "f8b5efd0dcc899174dd4d9987bb97a3d"
  },
  {
    "url": "assets/js/35.b8e93cb6.js",
    "revision": "c13f9a00141daf05dfa58415da218c22"
  },
  {
    "url": "assets/js/36.959fe262.js",
    "revision": "7b6f40794ede1b75ac7f0947d9078949"
  },
  {
    "url": "assets/js/37.a86bf960.js",
    "revision": "e56195f8d86cb652cdab4f4114b62800"
  },
  {
    "url": "assets/js/38.07c63ef3.js",
    "revision": "569483eb10c3c57f4d461f8adc39975c"
  },
  {
    "url": "assets/js/39.2fd35744.js",
    "revision": "c57049d7d9e38574c2ac94ef707b7eb0"
  },
  {
    "url": "assets/js/4.cfc32bf0.js",
    "revision": "56ade649836161bfe976163ce791509b"
  },
  {
    "url": "assets/js/40.ce94243e.js",
    "revision": "3f1aed42cefd085c230972ded3e6b18a"
  },
  {
    "url": "assets/js/41.0f78abfc.js",
    "revision": "82b2eb1788d5af15298a5a4543aea4d7"
  },
  {
    "url": "assets/js/42.215e39b5.js",
    "revision": "4dcda061a13cb668cf396f9232b6c3d2"
  },
  {
    "url": "assets/js/43.50633645.js",
    "revision": "10fc17f10d50d547e75a994329ca550b"
  },
  {
    "url": "assets/js/44.9c3d36fb.js",
    "revision": "b96339446de1809e1c8e8db320bc630f"
  },
  {
    "url": "assets/js/45.5f2bbed6.js",
    "revision": "dda0369c49a719a6055fb67d09df2903"
  },
  {
    "url": "assets/js/46.7d4b2a89.js",
    "revision": "de974085611b58c68553d7cd5e53c0ad"
  },
  {
    "url": "assets/js/47.89c1b99d.js",
    "revision": "ef7ec540d6722715f7a66dd926d2c7ae"
  },
  {
    "url": "assets/js/48.b52e531c.js",
    "revision": "e70ef3038c431b00f28908bb265e23c5"
  },
  {
    "url": "assets/js/49.6de55251.js",
    "revision": "9e026c7688662e72258c9d0e6fa6e0c5"
  },
  {
    "url": "assets/js/5.b976183e.js",
    "revision": "360f5a002fd96d8a5c68a8752ce8e8b4"
  },
  {
    "url": "assets/js/50.36421a0b.js",
    "revision": "d282335a0201c79e10eaaebe32c1bdaf"
  },
  {
    "url": "assets/js/51.0a441b01.js",
    "revision": "8445b47fa5bb8a27aef2352a0c445a04"
  },
  {
    "url": "assets/js/52.97536ec3.js",
    "revision": "a21d59be857cc2b951d597a239d94796"
  },
  {
    "url": "assets/js/53.682684c9.js",
    "revision": "6a8948fd356e791998e35ff4e939ae56"
  },
  {
    "url": "assets/js/54.7f755c08.js",
    "revision": "a564656aba5cfe1ca6d2022a3a3c571a"
  },
  {
    "url": "assets/js/55.f08472d2.js",
    "revision": "25e43935199967c7c41acb09ed40ea4c"
  },
  {
    "url": "assets/js/56.6046e11c.js",
    "revision": "d321e0e797a805b80cb5a6421ad1e94e"
  },
  {
    "url": "assets/js/57.15088557.js",
    "revision": "c99c6a2860454cd0294ec61ecfe0e315"
  },
  {
    "url": "assets/js/58.5a270f5e.js",
    "revision": "6efa875d5305ab6c08ef0e75fa60f64e"
  },
  {
    "url": "assets/js/59.c424fd45.js",
    "revision": "f271b32bcb237e78eebb28c2712f7bda"
  },
  {
    "url": "assets/js/6.489348a1.js",
    "revision": "36bdd82ade31c0fd107f85cd66bc858b"
  },
  {
    "url": "assets/js/60.aebc0ac3.js",
    "revision": "809a8e63797561c1b6b91cc4654f5041"
  },
  {
    "url": "assets/js/61.af7a1c82.js",
    "revision": "eba40995482a918d17fb6e228808af89"
  },
  {
    "url": "assets/js/62.831b64d1.js",
    "revision": "85e7489fc3598a40aa8810f5c5ad78ee"
  },
  {
    "url": "assets/js/63.5ee2bf2c.js",
    "revision": "015f5d02b2cf4d4c43fb295783e2d669"
  },
  {
    "url": "assets/js/64.711498a4.js",
    "revision": "0baf1271246684f32bc71d898d5a8f02"
  },
  {
    "url": "assets/js/65.d6a77cf9.js",
    "revision": "bdc5f25af8336ffdec8224420b07c614"
  },
  {
    "url": "assets/js/66.2dad35f7.js",
    "revision": "b81d11b35fe983031a832e5a09f86540"
  },
  {
    "url": "assets/js/67.1b433830.js",
    "revision": "35e017c638e798597f6fe072545762d4"
  },
  {
    "url": "assets/js/68.a66fbf58.js",
    "revision": "7f34e68ff3bc27b2382dee6843379f63"
  },
  {
    "url": "assets/js/69.61e6b753.js",
    "revision": "17b3250a292f432336692d3e6f425043"
  },
  {
    "url": "assets/js/7.03df078f.js",
    "revision": "04ca48bf171325c0a5328ba9961a1bb2"
  },
  {
    "url": "assets/js/70.a437af4e.js",
    "revision": "258142f30d885bd595335749487e1bff"
  },
  {
    "url": "assets/js/71.21acf687.js",
    "revision": "5befcad008159ef5b9dba17f0b34be57"
  },
  {
    "url": "assets/js/8.cd175ae3.js",
    "revision": "5d85fa6a12ae7adc171b58ce719a5e69"
  },
  {
    "url": "assets/js/9.f204c2f5.js",
    "revision": "b15604334597819010d62f654c827f8d"
  },
  {
    "url": "assets/js/app.4c108dc0.js",
    "revision": "b0c51f5075de0e6aa77a86698df258bd"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "2bc8ec06990a25e4ad737dcf732fba2f"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "382ad4223e09d9305caadb4e05fcd365"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "194ce947ff6bdb462989753b02d33167"
  },
  {
    "url": "DDL/createView.html",
    "revision": "9bb5905c98d37f91299d25467551afb3"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "e340cbe274bd64fbad2bda343b213625"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "51285180b728760c7842f4aae9bbfc82"
  },
  {
    "url": "DDL/index.html",
    "revision": "47e8f04aadad1fc6fc6041a2b5ec39db"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "a7ffa795e0e35a8dee2084ae42aedf3c"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "6bf5537c59ae358a6ec86e9021560d4c"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "86ce61d7e7bc0cddb545bcc976f8d919"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "09364ca8984533d5796c28823e1cb75f"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "23d1beed0620942d6c89378ea83ede66"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "e35ad2e75d9dbb75d1878e307c1a54e0"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "6b60f3491d4b4c7e806f8526bcb99a95"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "4e7cb77d3fae7bdc0910197b83b8345e"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "6700d941385511b926b492fb05c4e1b1"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "2222d7ee944e82bc1524acf06ac72d7e"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "f0149d67347acd154af0d741f8e36f3c"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "ff79cbade49b78b3de4fa0f07f2783c2"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "c0326012170710d4104bd07aab7cb4e2"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "11d3fd8020553bcb348a3d7a15f52346"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "0b251abc30794d8011c4a7ef7f9f31ba"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "29a082bd56169e24ec56f99d35a93f4c"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "81363602eb48ed85c5917822bcdb9f0a"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "62ae98e5773452afe1c015e6e625806b"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "ac74a91bf662a0eccc7c1da264fd9cdc"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "c903d228a9ddcc194b6d40f01d521268"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "3986a06cd14d659f5ec16fb7fbc4e239"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "7daf6a344f6ca530e6294fa8102b9fca"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "dfdced73e74aab57ded0cc3b70b58145"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "7cb56bf6f835e178bbe4f08dca4b0693"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "fe9ddf6979cfb09aa5362e08dd25ae2e"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "5d77e6bf0c48cb7291971643e565fccb"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "afbc7756dcc39f0bef22f03ea94bbc4f"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "f892e8a2b4bcceb345dc875715815567"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "83fbef478d77aa01b0b0bf263e13d757"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "49db171ec6575fde00176de6b7be1950"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "d37ebf64d043d7dfc496e637814d9d51"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "98c6b3ed98f267c92ac4eafd6a4667fe"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "6e71cd4a7bb16989c4017390cdf78ed7"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "cdfbcd35d62af7ca248a027c3e20eeec"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "f48b7c3db1cb99ede7ed17af6816bde7"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "7c32aadd42b2a7eaa644e57dbe6da7eb"
  },
  {
    "url": "Design/index.html",
    "revision": "791272e8e2734b7f74e6302578ec79c1"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "c8cc1aff8d8b4cbedce315195665fbd1"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "48ed83cd56711e1e04e55f7fe5354a5d"
  },
  {
    "url": "Design/normalization.html",
    "revision": "18a4661c109a1ff708e5da8faa94f109"
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
    "revision": "e0ec500a719f64d6e8830b57170878ea"
  },
  {
    "url": "DML/index.html",
    "revision": "5a585e6264452f0ab47c286ddbda033b"
  },
  {
    "url": "DML/insert.html",
    "revision": "06635dc0ab48ee1a413bc3362c9773e7"
  },
  {
    "url": "DML/update.html",
    "revision": "b08d2b2bfbd62184b9549bb807690c46"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "ef70aab941b6193bf8ad2287c7f53628"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "be0593ac1a75d4b3920480de83f1f127"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "badce1cbce42d4eb4ebbf35329d8f173"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "65ec4017e2365d1548f9fc911b87b019"
  },
  {
    "url": "SQL/index.html",
    "revision": "6d56b7f5d68fbc1e5ad46b5382103328"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "03f6fe85ed48e70c4070d7c1a76d5526"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "03d2aac17392a739d8570fc83cc517ae"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "18c626a6b680da7247db8516474d155c"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "564915061807668f8e700b7d78695a40"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "1d850d98079c12abd7de511ae03c7898"
  },
  {
    "url": "SQL/unions.html",
    "revision": "fbab7e2ae232c0dbb41ee61d227ca353"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "4e1de7d7b39b764c19a57c2f9913cd42"
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
