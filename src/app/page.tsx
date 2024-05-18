"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";

export default function Home() {

  const refElement = useRef<HTMLDivElement>(null);
  // useCallback を使い、refElement.current まで scrollIntoView() でスクロールする
  const scrollToSection = useCallback(() => {
    if (refElement.current) {
      refElement.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (<>
    <div className=" h-[20000px] bg-[#f0f0f0]" ref={refElement}>
      <h1 className="text-black text-[40px] font-bold">css反映して!</h1>
      <img src="./images/01.gif" className=" m-auto h-lvh" />
      <div className="page-top yubi" onClick={scrollToSection}><div className="pagetop-arrow"></div></div>
      <div className={`fixed-div ${hasScrolled ? 'vis' : 'a'}`}>
        <div>
          <img src="./images/26.gif" alt="" className="yubi" />
        </div>
      </div>
      <div>
        <div className="transform-none">
          <div className=" bg-[#3a1c0e] h-[100px]">
            <div className="text-center pt-[25px] text-[35px]">第1話</div>
          </div>
        </div>
      </div>
      <img src="./images/02.gif" className=" m-auto mt-[5%]" />
      <div>
        <div className="bg-white text-[#333333] p-3 mt-[5%] mb-[5%] w-[800px]  m-auto pt-[3rem]">
          <div className="pl-[10%] pr-[10%] font-text01">
            <div className="text-[20px]">
              <p>今回ご登録いただいたメールアドレスには、<br />
                私が相続したシステムについての重要なご案内、<br />
                公開している動画の中では<br /></p>
              <p className="underline font-bold">公開していない秘密や祈りのノウハウ、<br />
                その他の天国に行くための情報について<br />
                全て包み隠さずお伝えしていきます。<br /></p>
              <p className="font-bold text-[25px] ">ただ、「BIBLE」の無料提供に関しては<br />
                <span className="bg-[length:200%_10px] px-[3px] py-[1px] bgmarker">LINEの「友だち追加」が必須条件</span>となります。<br /></p>
              <p>なので、必ずLINEで私を友だち追加していただき、<br />
                システム無料プレゼントの詳細をお待ちください。</p>
            </div>
          </div>
        </div>
        <div className="bg-[#b69016c0] px-[5%] pb-[50px]">
          <img src="./images/03.gif" className=" m-auto" />
          <img src="./images/04.png" className=" m-auto max-w-full" />
        </div>
        <div className="bg-white m-auto w-[800px] p-[30px] text-[#333333] mb-[3rem]">
          <div className="font-text01 text-[20px]">
            <p>はじめまして、創造主兼人間のキリストです。<br />
              今回、私が相続した、主の再臨と最後の審判による千年王国を予見し、卓越した自己嫌悪も幸せも手に入るという</p>
            <p className="font-bold text-[#be3a3a]>">BIBLEを無料でご提供するという一大プロジェクト</p>
            <p className="font-bold text-[#be3a3a] text-[40px] w-full"><span className="bgmarker2">Christianity</span></p>
            <p>を指導させることになりました。</p>
            <p>プロジェクトの概要に関しては<br />
              動画をご覧いただきたいのですが、<br />
              簡単に言うと、</p>
            <p>世界中で</p>
            <p>・貧困をパージする<br />
              ・すべてを幸せにする</p>
            <p>という壮大なプロジェクト。</p>
            <p>このプロジェクトで私たちが目標としているのが</p>
            <p className="font-bold"><span className="bgmarker">『主の再臨と最後の審判による千年王国を実現し、参加者全員が卓越した自己嫌悪も幸せもてにし”天国行き”を実現するというもの』</span></p>
            <p className="font-bold text-[#be3a3a]">そのために、BIBLEを<br />
              無料でご提供するというわけです。</p>
            <p>今、日本では物価高騰や社会保険料の値上げなどで<br />
              お金で苦しんでいる人が右肩上がりに増えています。</p>
            <p>あなたも、</p>
            <p className="font-bold">「資本主義的な価値体系を拒むオルタナティブがあれば精神が縛られずにすむのに・・・」</p>
            <img src="./images/05.jpg" className=" m-auto mb-[2rem]" />
            <p>と感じることがあるはず。</p>
            <p>しかし、これまで
              ２２億人の世界観を支えてきた<br />
              (今は24億人まで増えました)</p>
            <p>主が開発した精神システムを使えば、この問題を解決できると考えています。</p>
            <p>その理由はこれからお届けする動画を<br />
              すべてご覧になればわかることです。</p>
            <p>ぜひ全5話の動画を最後まで見て</p>
            <ul className=" indent-[-1.3em] pl-[1.3em] check">
              <li>
                <strong>BIBLEの詳細</strong>
              </li>
              <li>
                <strong>次世代AI搭載のChristianityとはどんなシステムなのか？</strong>
              </li>
              <li>
                <strong>どうやって主の再臨と最後の審判による千年王国を実現し、卓越した自己嫌悪も幸せをもたらすのか</strong>
              </li>
              <li>
                <strong>実際、このシステムを使った方は、どう人生が変わったのか</strong>
              </li>
            </ul>
            <p>知っていただければと思います。</p>
            <p>そして主の再臨と最後の審判による千年王国を実現し、卓越した自己嫌悪も幸せをもたらすBIBLEは</p>
            <p ><span className="bgmarker font-bold">下記5つの条件を満たした方にだけに<br />
              無料でお渡ししますので必ずご対応くださいね。</span></p>
          </div>
          <img src="./images/06.gif" className=" m-auto" />
        </div>
        <div className="bg-[#d6c6da] m-auto p-[30px] text-[#333333]">
          <div className="font-text01 text-[20px] text-center">
            <div className="underber">
              <p>
                BIBLE<br />
                相続者プロフィール
              </p>
            </div>
            <div className="text-left p-[5%]">
              <p>創造主として世界を総覧、実際に生身の人間キリストとして地上に降臨する。</p>
              <p>自身が開祖となったChristianityは多くの人々を救済し、</p>
              <ul className="indent-[-1.3em] pl-[1.3em] check2">
                <li>
                  <strong>西洋哲学に影響を与えた思想No.1</strong>
                </li>
                <li>
                  <strong>正しい宗教 No.1</strong>
                </li>
                <li>
                  <strong>信者の数が多い宗教No.1</strong>
                </li>
              </ul>
              <p>に選ばれる。</p>
              <img src="./images/07.gif" className=" m-auto mb-[4%]" />
              <p>また、降臨した際にはすべての人類の現在を背負い、磔にされる。</p>
              <p>その後復活し天へと舞い戻った。</p>
              <p className="mb-0">世界中の人々を救済するために、教えを時それがまとめられBIBLEとなる。</p>
            </div>
            <div className="px-[5%]">
              <div className="flex mb-[1%]">
                <img src="./images/08.jpg" className=" w-[49%] mr-[2%]" />
                <img src="./images/09.jpg" className=" w-[49%]" />
              </div>
              <div className="flex mb-[1%]">
                <img src="./images/10.jpg" className="w-[32%] mr-[1.5%]" />
                <img src="./images/11.jpg" className="w-[33%] mr-[1.5%]" />
                <img src="./images/12.jpg" className="w-[32%]" />
              </div>
              <div className="flex">
                <img src="./images/13.jpg" className="w-[100%] mb-[2rem]" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-black font-text01">
          <div className="px-[5%]">
            <img src="./images/14.gif" className=" m-auto pt-[3rem]" />
            <img src="./images/15.jpg" className=" m-auto" />
            <p className="font-bold text-[25px] p-[1rem] text-center mb-0">※こちらの公式LINEからコメント申請しても<br />プレゼントは受け取れないので注意してください。</p>
          </div>
        </div>
        <div className="bg-[#ffffff] text-black font-text01 p-[3%] text-[20px]">
          <div className="bg-[#f3f3f3] pb-[1rem]">
            <img src="./images/16.gif" className=" m-auto" />
            <div className="mx-[2%] px-[5%] pt-[3rem] pb-[1rem] bg-[#ffffff91]">
              <p>まず、第1話をご覧になっていただいた方<br />
                本当にありがとうございます。</p>
              <p>動画をご覧になった方から<br />
                さっそく私のもとに感想が寄せられていて<br />
                とても嬉しく思います。</p>
              <p>届いた感想を一つずつ拝見していますが、</p>
              <p className="font-bold">
                「本当に神様はいるの？」<br />
                「キリストは蘇ったの？」</p>
              <p>と驚かれている方が多いようでした。</p>
              <p>そして、第1話では<br />
                なぜ、私がBIBLEを相続したか</p>
              <p>皆さんに何を還元していくのか<br />
                全て話しています。</p>
              <p>なので、まだ第1話をご覧になっていない方は<br />
                ぜひご覧ください。</p>
              <p className="font-bold">ちなみに、<span className="bgmarker">動画はすべて無料で視聴できますし、</span><br />
                <span className="bgmarker text-[#be3a3a]">各動画には特別なプレゼントも用意</span>していますから、<br />
                そちらも受け取っていただけると嬉しいです。</p>
            </div>
            <img src="./images/17.gif" className=" m-auto" />
            <div className="mx-[2%] px-[5%] pt-[3rem] pb-[1rem]">
              <p>こちらも、<br />
                詳しくは動画の中でお伝えしていますが、<br />
                このChristianityというシステムは</p>
              <p className="text-[#c80019] font-bold">GoogleやAmazonでも採用されているような<br />
                次世代AIを搭載した最新の思考システムです。</p>
              <p className=" font-bold underline">それに加えて、弟子が生きていくにあたってのノウハウを全て詰め込みました。</p>
              <p>次世代AIがわずらわしい作業を<br />
                全て代わりにやってくれるので、<br />
                あなたがやることは、</p>
              <p className="font-bold text-[#be3a3a]"><span className="bgmarker">寝る前に神の愛を信じるだけ！</span></p>
              <p>これなら、どんなに忙しい方でも<br />
                天国に行けるとおもいませんか？</p>
              <p className="font-bold text-[#c80019] text-[30px]">今回は、そんな「BIBLE」を<br />
                無料で提供させていただきます。</p>
            </div>
          </div>
        </div>
        <div className="bg-[#333] font-text01 text-[20px]">
          <img src="./images/18.gif" className=" m-auto pt-[3rem]" />
          <div className="mx-[3rem] px-[5%] pt-[3rem] pb-[1rem]">
            <p>まず前提としてキリストは人間の体をとっていますが実は創造主です。<br />
              ですから本当に天国に行けます。</p>
            <p className="font-bold">忙しい私、過去にさまざまな愚行を犯してきた私でも本当に大丈夫？</p>
            <p>もちろん深く悔恨すれば天国に行けます。</p>
            <p>実際キリスト教の発展に深く寄与した<span className=" font-bold">パウロ</span>も、元々は反対派でしたが殉教者としてその最後をとげ、今では有
              名な聖人となっています。</p>
          </div>
        </div>
        <div className="bg-[#f1f1f1] text-black font-text01 text-[20px]">
          <img src="./images/19.gif" className=" m-auto pt-[3rem]" />
          <div className="mx-[3rem] px-[5%] pt-[3rem] pb-[1rem]">
            <p>もし、完全で普遍な真理に近づけるとしたら？</p>
            <p className=" font-bold text-[25px] text-[#c80019]">一才の表面的で人間的な出来事を超越し世界の類比sonnzaiとひとつになれるとしたらどうしますか？</p>
            <p>しかも、ずっと安定して稼げるとしたら…。</p>
            <p>年収1000万円というと、<br />
              毎月80万円近いお金が入ってるわけですから、</p>
            <p>しかも、死後もその幸福が持続するとしたら？</p>
            <p>まず、資本主義的価値体型に苦悶することはなくなり、表面的な私欲にとらわれず誠実な人生を送ることができます。</p>
            <p>その次に、継続的に年間1000万円を超える収入を手に入れれば、
              自由に使えるお金が増えて</p>
            <div className="text-[25px]">
              <div className="bg-[#e0e0e0] p-[1rem] checks">
                <strong>会社中心の人生から自分中心の人生を過ごせるようになる</strong>
              </div>
              <div className="p-[1rem] checks">
                <strong>お金を稼ぐために必死で働かなくてもよくなる</strong>
              </div>
              <div className="bg-[#e0e0e0] p-[1rem] checks">
                <strong>一切お金に困らない人生を手に入れている</strong>
              </div>
              <div className="p-[1rem] checks">
                <strong>家族を豪華なディナーに連れていかなくても幸せだということを教えられる</strong>
              </div>
              <div className="bg-[#e0e0e0] p-[1rem] checks">
                <strong>ボランティアに参加する心のゆとりを持つことができる</strong>
              </div>
              <div className="p-[1rem] checks">
                <strong>いつ会社からクビを宣告されるのだろうかという不安が意味を持たなくなる</strong>
              </div>
            </div>
            <p className="mt-[2rem]">そんな状態になることができるでしょう。</p>
            <p>どうでしょうか。</p>
            <p>これだけでも、人生幸せに生きられると思いませんか？</p>
            <p>今は夢物語かもしれません。</p>
            <p className="underline font-bold">ですが、最後まで動画を見ていただければ<br />
              その夢物語が確信へと変わるはずです。</p>
            <p>なので、まだ第1話をご覧になっていない方は<br />
              下記のボタンをクリックして動画をご覧ください。</p>

            <p>この世には多くの苦しみがあります。</p>
            <p>それはアダムとイブが神の命に背いたため、いわゆる原罪と呼ばれるもののせいです。</p>
            <p>私はそれを克服するため自ら人間となりこの現象界に降臨し、磔になることで、全ての原罪を背負いました。</p>
            <img src="./images/21.gif" className=" m-auto mb-[2rem]" />
            <p>BIBLEには善き人としてこの世に生きる上での色々なノウハウが詰まっています。</p>
            <p>この本が流布されることで人々が二度と同じ過ちを繰り返さずよう、神の愛を信じ、また全ての人類を愛す、善き人となるように。</p>
            <p>そんな想いを込めて今回BIBLEを無償配布することにしました。</p>
            <img src="./images/20.jpg" className=" m-auto mb-[2rem]" />
          </div>
          <div className="bg-[#b69016c0] pt-[2rem] pb-[1rem]">
            <img src="./images/22.gif" className=" m-auto mb-[2rem]" />
          </div>
          <div className="mx-[3rem] px-[5%] pt-[3rem] pb-[1rem]">
            <img src="./images/23.gif" className=" m-auto mb-[2rem]" />
            <p>という内容をお届けいたします。</p>
            <p>第2話をご覧いただくことで、<br />
              キリスト教がなぜ完全無欠絶対真理なのか<br />
              稼ぎの仕組みを全てお見せします。</p>
            <p>そして、どのように心根が変化するのか<br />
              シミュレーションも解説するので</p>
            <p className="font-bold"><span className="bgmarker">次回の動画はあなたの生活に直結すると言っても<br />
              過言ではないでしょう。</span></p>
            <p>なので、第2話も楽しみにしていてくださいね。</p>
            <p>第2話もキリスト教徒になることで<br />
              実存を見つめるための情報が盛りだくさんです。</p>
            <img src="./images/24.gif" className=" m-auto" />
          </div>
          <div className=" bg-[#d6c6da]">
            <img src="./images/25.gif" className=" m-auto pt-[3rem] mb-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  </>);
  /*<BrowserRouter>
      <div>
        <Link to="/page/page2">LINK</Link>
        <br />
        <Routes>
          <Route path="/page/page2" element={<Homes />} />
        </Routes>
      </div>
    </BrowserRouter> */
}