<body>
  <style>
    input,
    select {
      height: 1.5rem;
      font-size: 1rem;
      font-family: Montserrat, arial, sans-serif;
    }

    input[type='submit'] {
      background-color: #28bcff;
      border: none;
      color: #000;
      padding: 1rem 1.5rem;
      text-decoration: none;
      margin: 4px 2px;
      cursor: pointer;
      height: 3rem;
    }

    .main-graphic {
      width: 100%;
      max-width: 550px;
    }
    .recommendation-finder {
      color: rgb(94, 94, 94);
      font-family: Montserrat, arial, sans-serif;
      /* font-size: 26px; */
      font-weight: 400;
      max-width: 1150px;
      background: #fff;
      padding: 1.5rem;
      width: 100%;
    }

    form,
    .recommendation {
      width: 0;
      margin: auto;
      overflow: hidden;
      transition: 0.8s;
      text-align: left;
      filter: opacity(0.7);
    }

    .step1 {
      transition: 1s;
      height: auto;
    }

    .step1.hide {
      height: 0;
      transition: 1s;
    }

    .step2 {
      transition: 0.6s 0.4s;
    }

    fieldset,
    .fieldset {
      padding: 1rem;
    }

    legend {
      text-align: left;
    }

    legend {
      font-family: Montserrat, arial, sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 25px;
    }

    form.active,
    .active {
      border-bottom: 3px solid #00aeef;
      border-radius: 6px;
      filter: opacity(1);
    }

    .active legend {
      color: #007fb0;
    }

    .show {
      width: 80%;
      /* max-width: 400px; */
    }

    .recommendation {
      position: absolute;
      width: 100vw;
      /* width: 0; */
      height: 0;
      left: 0;
      top: 0;
      overflow: auto;
      background: #fff;
      z-index: 10;
      filter: opacity(0);
      transition: 0.5s;
      padding: 0;
      box-sizing: border-box;
    }

    .recommendation.show {
      width: 100vw;
      height: 100vh;
      padding: 2rem;
      /* max-width: 650px;   */
      filter: opacity(1);
      border: 1rem rgba(0, 0, 0, 0.4) solid;
    }

    aside {
      color: rgb(94, 94, 94);
      font-family: Montserrat, arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin: 1rem auto 1rem;
      width: 80%;
    }

    .step3 > fieldset > div,
    .step3 > .fieldset > div {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      text-align: center;
      flex-direction: column;
    }

    input,
    select,
    .submit-full {
      margin: 0.5rem;
    }

    input[type='submit'],
    .submit-full {
      margin: 0.5rem;
      float: right;
      padding: 0 0.5rem !important;
      height: 2rem !important;
      float: left !important;
    }

    .unit-name {
      margin-bottom: 2rem;
    }

    .unit-name b {
      font-size: 1.2rem;
      font-weight: 800;
    }

    .unit-tonnage {
      font-size: 1.1rem;
      font-weight: 400;
    }

    .unit-seer {
      font-size: 1.1rem;
      font-weight: 400;
    }

    .unit-image {
      float: left;
      margin-right: 2.5rem;
      width: 40%;
    }
    .unit-image img {
      width: 98%;
    }

    .unit-btu,
    .unit-price,
    .unit-price-package {
      font-size: 1rem;
    }

    .unit-guarantees,
    .unit-guarantees .half {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-content: center;
      flex-wrap: wrap;
    }

    .unit-guarantees figure {
      text-align: center;
      font-size: 1rem;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
    }
    .unit-guarantees figure img {
      width: 100%;
      max-width: 84px;
      max-height: 84px;
      margin-bottom: 0.5rem;
    }
    .unit-guarantees figure figcaption {
      font-size: 1.5rem;
    }

    .close-modal {
      position: sticky;
      left: 97%;
      top: 0;
      padding: 0.5rem;
      background: #00aeef;
      color: #fff;
    }

    .phone-button-box {
      float: right;
      /* margin-right: 5rem; */
      text-align: center;
    }

    .phone-button {
      background: #007fb0;
      color: #fff;
      padding: 0.65rem;
      border-radius: 4px;
      margin: 0 1rem 1rem 1rem;
      font-size: 1.25rem;
    }

    .financing-box {
      width: 50%;
      float: left;
      margin: 2rem auto;
      align-content: center;
      justify-content: flex-start;
      display: flex;
      flex-wrap: wrap;
      padding: 2rem 1rem;
      border: 2px #ddd solid;
      border-radius: 1rem;
      color: rgb(94, 94, 94);
      text-decoration: none;
    }

    .financing-box .image-div {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 200px;
      margin: auto;
    }

    .financing-box .image-div img {
      width: 100%;
      float: none;
      margin: 1rem auto;
      min-width: 125px;
    }

    .warranties-box {
      width: 93%;
      float: left;
      margin-right: 2rem;
      align-content: center;
      justify-content: center;
      display: flex;
      padding: 2rem 1rem;
      border: 2px #ddd solid;
      border-radius: 1rem;
      text-align: center;
    }

    .awards-box {
      display: flex;
      justify-content: center;
      width: 93%;
      padding: 2rem;
    }

    .awards-box img {
      height: 100%;
      max-height: 200px;
      margin: 0 2rem;
    }

    @media only screen and (min-width: 450px) {
      .unit-guarantees figure {
        width: 40%;
      }
    }

    @media only screen and (min-width: 1000px) {
      .step3 > fieldset > div,
      .step3 > .fieldset > div {
        flex-wrap: wrap;
        text-align: left;
        justify-content: space-around;
        flex-direction: row;
      }
      .unit-guarantees figure {
        width: 24%;
        text-align: left;
      }
    }

    @media only screen and (max-width: 603px) {
      .financing-box {
        width: calc(100% - 2rem);
      }
    }

    @media only screen and (max-width: 450px) {
      .show  {
        width: 85% !important;
      }

      fieldset,
      .fieldset  {
        padding: 0.5rem !important;
        border: 0 !important;
        font-size: 1rem !important;
        width: 90vw !important;
      }
      legend  {
        font-size: 0.9rem;
      }

      fieldset p,
      .fieldset p {
        width: 80vw !important;
      }

      input,
       select {
        margin: 0.5rem 0.5rem 0.1rem !important;
        border: 1px #ccc solid !important;
      }

      select  {
        font-size: 0.85rem !important;
      }
    }

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      /* IE-specific CSS */
      .unit-guarantees figure figcaption,
      .financing-box p {
        font-size: 1rem;
      }
    }
  </style>

  <section class="recommendation-finder">
    <form class="step1 show active">
      <img
        src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/ac-systems-parts.jpg/:/"
        alt="Display of numerous AC units and accessories."
        class="main-graphic"
      />
      <fieldset class="fieldset">
        <legend>Location:</legend>
        <p>Enter zip-code where the unit will be installed:</p>
        <input
          autofocus
          type="text"
          name="zip-code"
          pattern="[0-9]*"
          inputmode="numeric"
          value=""
        /><br />
        <input type="submit" value="Submit" class="submit-button" />
      </fieldset>
    </form>

    <aside class="aside1"></aside>

    <form class="step2">
      <fieldset class="fieldset">
        <legend>Heat Source:</legend>
        <p>Is your heat source a:</p>
        <input
          type="radio"
          name="heat-source"
          id="gas-furnace"
          value="furnace"
        /><label for="gas-furnace">Gas Furnace</label>
        <br />
        <input
          type="radio"
          name="heat-source"
          id="electric"
          value="pump"
        /><label for="electric">Electric/Heat Pump</label><br />
      </fieldset>
      <!-- <input type="submit" value="Submit" class="submit-button" /> -->
    </form>

    <aside class="aside2"></aside>

    <form class="step3">
      <fieldset class="fieldset" style="display: flex;">
        <legend>Square Footage/Tonnage:</legend>
        <div>
          <div class="footage-dropdown">
            <p>
              Square footage of the home:
            </p>
            <select name="footage" class="footage">
              <optgroup label="Square Footage">
                <option name="nochoice" value="0">Choose square footage</option>
                <option name="800sf" value="800">700-800sf</option>
                <option name="1000sf" value="1000">800-1000sf</option>
                <option name="1200sf" value="1200">1000-1200sf</option>
                <option name="1400sf" value="1400">1200-1400sf</option>
                <option name="1700sf" value="1700">1500-1700sf</option>
                <option name="2000sf" value="2000">1800-2000sf</option>
                <option name="2500sf" value="2500">2100-2500sf</option>
              </optgroup>
            </select>
          </div>
          <div><em>or</em></div>
          <div class="tonnage-dropdown">
            <p>
              Tonnage of the existing system:
            </p>
            <select name="tonnage" class="tonnage">
              <optgroup label="Tonnage">
                <option name="nochoice" value="0">Choose tonnage...</option>
                <option name="1_5t" value="800">1.5 tons</option>
                <option name="2_0t" value="1000">2 tons</option>
                <option name="2_5t" value="1200">2.5 tons</option>
                <option name="3_0t" value="1400">3 tons</option>
                <option name="3_5t" value="1700">3.5 tons</option>
                <option name="4_0t" value="2000">4 tons</option>
                <option name="5_0t" value="2500">5 tons</option>
              </optgroup>
            </select>
          </div>
        </div>
      </fieldset>
    </form>

    <aside class="aside3"></aside>

    <div class="recommendation">
      <button class="close-modal">X</button>
      <div class="unit-name"></div>
      <div class="unit-image"></div>
      <div class="unit-tonnage"></div>
      <div class="unit-seer"></div>
      <div class="unit-btu"></div>
      <div class="unit-price"></div>
      <div class="unit-price-package"></div>
      <a
        href="https://rockruthhvac.com/finacing-available"
        class="financing-box"
      >
      </a>
      <div class="phone-button-box">
        <p>
          Call to order:<br />
          <button class="bold hvr-bounce-to-right phone-button">
            <i class="fa fa-phone"></i
            ><a style="color: #fff" href="tel:+17706932946">(770) 693-2946</a>
          </button>
        </p>
      </div>
      <div class="unit-guarantees">
        <figure>
          <img
            src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/100_satisfaction.png/:/rs=w:370,m,cg:true"
            alt="100% Satisfaction Guaranteed"
          />
          <figcaption>
            <strong>100% Satisfaction</strong> <br /><span
              >We guarantee your 100% satisfaction.</span
            >
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/guaranteed_installation.png/:/rs=w:370,m,cg:true"
            alt="Guaranteed installation"
          />
          <figcaption>
            <strong>Guaranteed Installation</strong> <br /><span
              >You are covered with a parts & labor warranty.</span
            >
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/just_right.png/:/rs=w:370,m,cg:true"
            alt="100% Satisfaction Guaranteed"
          />
          <figcaption>
            <strong>Just Right</strong> <br /><span
              >Our experts verify job details in advance.</span
            >
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/trained_tech.png/:/rs=w:370,m,cg:true"
            alt="100% Satisfaction Guaranteed"
          />
          <figcaption>
            <strong>Trained Technicians</strong> <br /><span
              >Your system will be installed by trained pros.</span
            >
          </figcaption>
        </figure>
      </div>

      <div class="warranties-box">
        Warranty: <br />10-yr parts, 1-yr labor INCLUDED!!!
      </div>
      <div class="awards-box">
        <img
          src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/a0be6286-29e3-4225-99b2-ef6f7f9c77ba.png/:/rs=w:370,m,cg:true"
          alt="Home Advisor -- Screened & Approved"
        />
        <img
          src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/a5e3e12e-61cd-4def-87ba-708cc8c5617f.png/:/rs=w:370,m,cg:true"
          alt="Home Advisor -- Screened & Approved"
        />
      </div>
    </div>
  </section>

  <script>
    var zipcodes = [
      '30301',
      '30302',
      '30303',
      '30304',
      '30305',
      '30306',
      '30307',
      '30308',
      '30309',
      '30310',
      '30311',
      '30312',
      '30313',
      '30314',
      '30315',
      '30316',
      '30317',
      '30318',
      '30319',
      '30320',
      '30321',
      '30322',
      '30324',
      '30325',
      '30326',
      '30327',
      '30328',
      '30329',
      '30331',
      '30332',
      '30333',
      '30334',
      '30336',
      '30337',
      '30338',
      '30339',
      '30340',
      '30341',
      '30342',
      '30343',
      '30344',
      '30345',
      '30346',
      '30348',
      '30349',
      '30350',
      '30353',
      '30354',
      '30355',
      '30356',
      '30357',
      '30358',
      '30359',
      '30360',
      '30361',
      '30362',
      '30363',
      '30364',
      '30366',
      '30368',
      '30369',
      '30370',
      '30371',
      '30374',
      '30375',
      '30377',
      '30378',
      '30380',
      '30384',
      '30385',
      '30388',
      '30392',
      '30394',
      '30396',
      '30398',
      '31106',
      '31107',
      '31119',
      '31126',
      '31131',
      '31136',
      '31139',
      '31141',
      '31145',
      '31146',
      '31150',
      '31156',
      '31192',
      '31193',
      '31195',
      '31196',
      '39901',

      '30002',
      '30021',
      '30030',
      '30031',
      '30032',
      '30033',
      '30034',
      '30035',
      '30036',
      '30037',
      '30038',
      '30058',
      '30072',
      '30074',
      '30079',
      '30083',
      '30084',
      '30085',
      '30086',
      '30087',
      '30088',
      '30294',

      '30003',
      '30010',
      '30017',
      '30019',
      '30024',
      '30026',
      '30029',
      '30039',
      '30042',
      '30043',
      '30044',
      '30045',
      '30046',
      '30047',
      '30048',
      '30049',
      '30071',
      '30078',
      '30091',
      '30092',
      '30093',
      '30095',
      '30096',
      '30099',
      '30515',
      '30518',
      '30519',

      '30006',
      '30007',
      '30008',
      '30060',
      '30061',
      '30062',
      '30063',
      '30064',
      '30065',
      '30066',
      '30067',
      '30068',
      '30069',
      '30080',
      '30081',
      '30082',
      '30090',
      '30101',
      '30106',
      '30111',
      '30126',
      '30127',
      '30144',
      '30152',
      '30156',
      '30160',
      '30168',
      '31144',

      '30101',
      '30102',
      '30103',
      '30320',
      '30004',
      '30005',
      '30009',
      '30022',
      '30023',
      '30301',
      '30302',
      '30303',
      '30304',
      '30305',
      '30306',
      '30307',
      '30308',
      '30309',
      '30310',
      '30311',
      '30312',
      '30313',
      '30314',
      '30315',
      '30316',
      '30317',
      '30318',
      '30319',
      '30320',
      '30321',
      '30322',
      '30324',
      '30325',
      '30326',
      '30327',
      '30328',
      '30329',
      '30330',
      '30331',
      '30332',
      '30333',
      '30334',
      '30336',
      '30337',
      '30338',
      '30339',
      '30340',
      '30341',
      '30342',
      '30343',
      '30344',
      '30345',
      '30346',
      '30347',
      '30348',
      '30349',
      '30350',
      '30353',
      '30354',
      '30355',
      '30356',
      '30357',
      '30358',
      '30359',
      '30360',
      '30361',
      '30362',
      '30364',
      '30366',
      '30368',
      '30369',
      '30370',
      '30371',
      '30374',
      '30375',
      '30376',
      '30377',
      '30378',
      '30379',
      '30380',
      '30384',
      '30385',
      '30388',
      '30390',
      '30392',
      '30394',
      '30396',
      '30398',
      '31106',
      '31107',
      '31119',
      '31126',
      '31131',
      '31139',
      '31141',
      '31145',
      '31146',
      '31150',
      '31156',
      '31192',
      '31193',
      '31195',
      '31196',
      '30301',
      '30302',
      '30303',
      '30304',
      '30305',
      '30306',
      '30307',
      '30308',
      '30309',
      '30310',
      '30311',
      '30312',
      '30313',
      '30314',
      '30315',
      '30316',
      '30317',
      '30318',
      '30319',
      '30320',
      '30321',
      '30322',
      '30324',
      '30325',
      '30326',
      '30327',
      '30328',
      '30329',
      '30330',
      '30331',
      '30332',
      '30333',
      '30334',
      '30336',
      '30337',
      '30338',
      '30339',
      '30340',
      '30341',
      '30342',
      '30343',
      '30344',
      '30345',
      '30346',
      '30347',
      '30348',
      '30349',
      '30350',
      '30353',
      '30354',
      '30355',
      '30356',
      '30357',
      '30358',
      '30359',
      '30360',
      '30361',
      '30362',
      '30363',
      '30364',
      '30366',
      '30368',
      '30369',
      '30370',
      '30371',
      '30374',
      '30375',
      '30376',
      '30377',
      '30378',
      '30379',
      '30380',
      '30384',
      '30385',
      '30388',
      '30390',
      '30392',
      '30394',
      '30396',
      '30398',
      '31106',
      '31107',
      '31119',
      '31126',
      '31131',
      '31136',
      '31139',
      '31141',
      '31145',
      '31146',
      '31150',
      '31156',
      '31192',
      '31193',
      '31195',
      '31196',
      '39901',
      '31195',
      '31196',
      '30060',
      '30380',
      '30375',
      '30385',
      '30011',
      '30106',
      '30168',
      '30388',
      '30002',
      '30002',
      '30107',
      '30398',
      '30384',
      '30144',
      '30032',
      '30092',
      '30096',
      '30620',
      '30143',
      '30108',
      '30109',
      '30109',
      '30329',
      '30205',
      '30515',
      '30518',
      '30519',
      '30114',
      '30115',
      '30169',
      '30112',
      '30116',
      '30117',
      '30118',
      '30119',
      '30120',
      '30121',
      '30123',
      '30039',
      '30341',
      '30366',
      '39901',
      '30268',
      '30111',
      '30021',
      '30337',
      '30349',
      '30288',
      '30012',
      '30013',
      '30094',
      '30014',
      '30015',
      '30016',
      '30339',
      '30028',
      '30040',
      '30041',
      '30019',
      '30132',
      '30157',
      '30030',
      '30031',
      '30032',
      '30033',
      '30034',
      '30035',
      '30036',
      '30037',
      '30060',
      '30069',
      '30060',
      '30069',
      '30340',
      '30360',
      '30362',
      '30133',
      '30134',
      '30135',
      '30154',
      '30333',
      '30026',
      '30029',
      '30095',
      '30096',
      '30097',
      '30098',
      '30099',
      '30032',
      '30338',
      '30346',
      '30356',
      '30360',
      '30344',
      '30364',
      '30294',
      '31141',
      '30137',
      '30322',
      '30170',
      '30120',
      '30145',
      '30212',
      '30213',
      '30214',
      '30215',
      '30270',
      '30298',
      '30297',
      '30298',
      '30297',
      '30310',
      '30330',
      '30396',
      '30303',
      '30641',
      '30220',
      '30017',
      '30223',
      '30224',
      '30228',
      '30354',
      '30229',
      '30141',
      '30114',
      '30115',
      '30142',
      '30188',
      '30336',
      '39901',
      '30143',
      '30018',
      '30005',
      '30022',
      '30024',
      '30097',
      '30236',
      '30237',
      '30238',
      '30144',
      '30152',
      '30156',
      '30160',
      '30145',
      '30183',
      '30260',
      '30236',
      '30042',
      '30043',
      '30044',
      '30045',
      '30046',
      '30049',
      '30146',
      '31126',
      '31126',
      '30047',
      '30048',
      '30122',
      '30038',
      '30058',
      '30307',
      '30063',
      '30248',
      '30052',
      '30250',
      '30126',
      '30065',
      '30148',
      '30148',
      '30006',
      '30007',
      '30008',
      '30060',
      '30061',
      '30062',
      '30063',
      '30064',
      '30065',
      '30066',
      '30067',
      '30068',
      '30069',
      '30090',
      '30253',
      '30252',
      '30253',
      '31192',
      '30083',
      '30004',
      '30009',
      '30655',
      '30656',
      '30259',
      '30260',
      '30287',
      '30150',
      '30065',
      '30151',
      '30056',
      '31136',
      '30263',
      '30264',
      '30265',
      '30271',
      '30003',
      '30010',
      '30071',
      '30091',
      '30092',
      '30093',
      '30319',
      '30120',
      '30033',
      '30306',
      '30026',
      '30029',
      '30338',
      '31145',
      '30101',
      '30266',
      '30339',
      '30054',
      '30268',
      '30092',
      '30269',
      '30270',
      '30270',
      '30092',
      '31146',
      '30072',
      '30014',
      '30016',
      '30070',
      '30127',
      '30099',
      '30263',
      '30272',
      '30074',
      '30273',
      '30274',
      '30296',
      '30093',
      '30170',
      '30075',
      '30076',
      '30077',
      '30171',
      '30083',
      '30086',
      '30075',
      '30328',
      '30342',
      '30350',
      '30358',
      '30275',
      '30079',
      '30276',
      '30277',
      '30265',
      '30087',
      '30080',
      '30081',
      '30082',
      '30339',
      '30035',
      '30039',
      '30078',
      '30025',
      '30119',
      '30098',
      '30666',
      '30281',
      '30083',
      '30086',
      '30087',
      '30088',
      '30518'
    ];
    var heatPumpImgUrl =
      'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/heatPumpSystem1.png/:/';
    var electricUnits = {
      sf800: {
        ton: 1.5,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 5,
        imgUrl: heatPumpImgUrl,
        priceSplit: 3895,
        pricePackage: 3799
      },
      sf1000: {
        ton: 2,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 5,
        imgUrl: heatPumpImgUrl,
        priceSplit: 3985,
        pricePackage: 3799
      },
      sf1200: {
        ton: 2.5,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 5,
        imgUrl: heatPumpImgUrl,
        priceSplit: 4105,
        pricePackage: 4200
      },
      sf1400: {
        ton: 3,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 8,
        imgUrl: heatPumpImgUrl,
        priceSplit: 4299,
        pricePackage: 4399
      },
      sf1700: {
        ton: 3.5,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 10,
        imgUrl: heatPumpImgUrl,
        priceSplit: 4379,
        pricePackage: 4499
      },
      sf2000: {
        ton: 4,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 10,
        imgUrl: heatPumpImgUrl,
        priceSplit: 4799,
        pricePackage: 4850
      },
      sf2500: {
        ton: 5,
        seer: 14,
        name: 'Complete Heat Pump System',
        kw: 10,
        imgUrl: heatPumpImgUrl,
        priceSplit: 4899,
        pricePackage: 4999
      }
    };
    var gasImgUrl =
      'https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/gasSplitSystem2.png/:/';
    var gasUnits = {
      sf800: {
        name: '1.5 Ton 14 SEER 80% AFUE 60K BTU System',
        ton: 1.5,
        seer: 14,
        btu: 60,
        imgUrl: gasImgUrl,
        priceSplit: 3895,
        pricePackage: 4299
      },
      sf1000: {
        name: '2 Ton 14 SEER 80% AFUE 60K BTU System',
        ton: 2,
        seer: 14,
        btu: 60,
        imgUrl: gasImgUrl,
        priceSplit: 3985,
        pricePackage: 4299
      },
      sf1200: {
        name: '2.5 Ton 14 SEER 80% AFUE 60K BTU System',
        ton: 2.5,
        seer: 14,
        btu: 60,
        imgUrl: gasImgUrl,
        priceSplit: 4105,
        pricePackage: 4375
      },
      sf1400: {
        name: '3 Ton 14 SEER 80% AFUE 60K BTU System',
        ton: 3,
        seer: 14,
        btu: 60,
        imgUrl: gasImgUrl,
        priceSplit: 4299,
        pricePackage: 4479
      },
      sf1700: {
        name: '3.5 Ton 14 SEER 80% AFUE 80K BTU System',
        ton: 3.5,
        seer: 14,
        btu: 80,
        imgUrl: gasImgUrl,
        priceSplit: 4379,
        pricePackage: 4850
      },
      sf2000: {
        name: '4 Ton 14 SEER 80% AFUE 80K BTU System',
        ton: 4,
        seer: 14,
        btu: 80,
        imgUrl: gasImgUrl,
        priceSplit: 4799,
        pricePackage: 4950
      },
      sf2500: {
        name: '5 Ton 14 SEER 80% AFUE 80K BTU System',
        ton: 5,
        seer: 14,
        btu: 80,
        imgUrl: gasImgUrl,
        priceSplit: 4899,
        pricePackage: 4999
      }
    };
    var asides = document.querySelectorAll('aside');
    var recommendedUnit = null;
    var heatingType = '';
    var d = document,
      unitName = d.querySelector('.unit-name'),
      unitTonnage = d.querySelector('.unit-tonnage'),
      unitSeer = d.querySelector('.unit-seer'),
      unitImage = d.querySelector('.unit-image'),
      unitBtu = d.querySelector('.unit-btu'),
      unitPrice = d.querySelector('.unit-price'),
      unitPricePackage = d.querySelector('.unit-price-package'),
      unitFinancingBox = d.querySelector('.financing-box'),
      step1 = d.querySelector('.step1'),
      step2 = d.querySelector('.step2'),
      step3 = d.querySelector('.step3'),
      closeModalButton = d.querySelector('.close-modal'),
      recommendation = d.querySelector('.recommendation');

    var checkZip = function checkZip(e) {
      e.preventDefault();
      var formVal = e.target.querySelector('input').value;

      // From https://github.com/latusinski/polyfill-array-includes/blob/master/array-includes.js
      if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
          value: function(searchElement, fromIndex) {
            if (this == null) {
              throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            var len = o.length >>> 0;

            if (len === 0) {
              return false;
            }

            var n = fromIndex | 0;

            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            function sameValueZero(x, y) {
              return (
                x === y ||
                (typeof x === 'number' &&
                  typeof y === 'number' &&
                  isNaN(x) &&
                  isNaN(y))
              );
            }

            while (k < len) {
              if (sameValueZero(o[k], searchElement)) {
                return true;
              }
              k++;
            }
            return false;
          }
        });
      }

      if (zipcodes.includes(formVal)) {
        step2.classList.add('show');
        step2.classList.add('active');
        e.target.classList.remove('active');
        asides[0].textContent = 'Great, we serve your area!';
        var wait = setTimeout(function() {
          step1.classList.add('hide');
        }, 500);
      } else {
        asides[0].textContent = 'Sorry, we do not yet serve your area!';
      }
    };

    var getHeatingType = function getHeatingType(e) {
      console.log('2:', e.target.value);
      step3.classList.add('show');
      step3.classList.add('active');
      heatingType = e.target.value;
      step2.classList.remove('active');
    };

    setRecUnit = function setRecUnit(val) {
      if (heatingType === 'pump') {
        return electricUnits['sf'.concat(val)];
      } else if (heatingType === 'furnace') {
        return gasUnits['sf'.concat(val)];
      }
    };

    var getRecommendation = function getRecommendation() {
      if (recommendedUnit.name) {
        unitName.innerHTML = 'We recommend this high-efficiency system package:<br /> <b>'.concat(
          recommendedUnit.name,
          '</b>'
        );
      } else {
        unitName.textContent = '';
      }

      if (recommendedUnit.ton) {
        unitTonnage.textContent = 'Tonnage: '.concat(recommendedUnit.ton);
      } else {
        unitTonnage.textContent = '';
      }

      if (recommendedUnit.seer) {
        unitSeer.textContent = 'SEER: '.concat(recommendedUnit.seer);
      } else {
        unitSeer.textContent = '';
      }

      if (recommendedUnit.btu || recommendedUnit.kw) {
        unitBtu.textContent = ''.concat(
          recommendedUnit.btu
            ? 'BTU: ' + recommendedUnit.btu + 'K'
            : 'kW: ' + recommendedUnit.kw
        );
      } else {
        unitBtu.textContent = '';
      }

      if (recommendedUnit.priceSplit) {
        unitPrice.innerHTML = 'Price:  $'
          .concat(recommendedUnit.priceSplit, '\n             <em>(')
          .concat(
            heatingType === 'furnace'
              ? 'Complete furnace, condenser & coil system -- gas split system'
              : 'Complete heat pump system',
            ')</em>'
          );
      } else {
        unitPrice.textContent = '';
      }

      if (recommendedUnit.pricePackage) {
        unitPricePackage.innerHTML = ''
          .concat(!recommendedUnit.priceSplit ? 'Price:' : ' ', '  $')
          .concat(recommendedUnit.pricePackage, '\n             <em>(')
          .concat(
            heatingType === 'furnace'
              ? 'Package gas system -- replace existing system'
              : 'Package electric heat pump system',
            ')</em>'
          );
      } else {
        unitPrice.textContent = '';
      }

      if (recommendedUnit.imgUrl) {
        unitImage.innerHTML = '<img src="'.concat(
          recommendedUnit.imgUrl
            ? recommendedUnit.imgUrl
            : 'images/no-image.png',
          '" alt="Image of the unit." />'
        );
      } else {
        unitImage.innerHTML = '';
      }

      if (recommendedUnit.priceSplit || recommendedUnit.pricePackage) {
        unitFinancingBox.innerHTML = '<div class="image-div"><img src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/2019-07-15%2012_58_29-60%20months%20financing%20images.png/:/rs=w:1440,h:1440" alt=""></div>\n            <p style="align-self: center; margin: auto; text-align: center; ">With 0% financing, pay as low as <span class="financing-monthly-amount">'.concat(
          recommendedUnit.priceSplit
            ? '$' + Math.ceil(recommendedUnit.priceSplit / 60)
            : '$' + Math.ceil(recommendedUnit.pricePackage / 60),
          '</span> per month!</p>'
        );
      }

      recommendation.classList.add('show');
    };

    var getTonnage = function getTonnage(e) {
      d.querySelector(
        '.footage-dropdown option[value="' + e.target.value + '"]'
      ).selected = 'selected';
      recommendedUnit = setRecUnit(e.target.value);
      console.log('tonnage');
      console.log('val: ', e.target.value, 'recommended: ', recommendedUnit);
      getRecommendation();
    };

    var getFootage = function getFootage(e) {
      d.querySelector(
        '.tonnage-dropdown option[value="' + e.target.value + '"]'
      ).selected = 'selected';
      recommendedUnit = setRecUnit(e.target.value);
      console.log('footage');
      console.log('val: ', e.target.value, 'recommended: ', recommendedUnit);
      getRecommendation();
      d.querySelector(
        '.tonnage-dropdown option[value="' + e.target.value + '"'
      ).setAttribute('selected', true);
    };

    var closeModal = function closeModal(e) {
      recommendation.classList.remove('show');
      d.querySelector('.footage-dropdown option[value="0"]').selected =
        'selected';
      d.querySelector('.tonnage-dropdown option[value="0"]').selected =
        'selected';
      recommendation.scrollTo(0, 0);
    };

    step1.addEventListener('submit', checkZip);
    step2.addEventListener('change', getHeatingType);
    d.querySelector('.tonnage').addEventListener('change', getTonnage);
    d.querySelector('.footage').addEventListener('change', getFootage); // d.querySelector('.submit-full').addEventListener('click', getRecommendation);

    closeModalButton.addEventListener('click', closeModal);
  </script>
</body>
