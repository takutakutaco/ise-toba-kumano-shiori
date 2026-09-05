import { Car, Check, Clock3, Footprints, MapPin, ShieldAlert, WalletCards } from 'lucide-react';

const dayOne = [
  ['5:30', '大阪を出発'], ['8:00頃', '伊勢神宮・内宮を参拝'], ['9:15', 'おはらい町・おかげ横丁を散策'], ['10:00〜10:40', 'おかげ横丁で昼食'], ['11:15〜14:15', '鳥羽水族館を見学'], ['14:15', '熊野市へ移動（途中で休憩1回）'], ['18:00', '紀南荘にチェックイン・夕食'],
];
const dayTwo = [
  ['8:00', '紀南荘を出発'], ['9:00頃', '大門坂駐車場に到着'], ['9:15', '熊野古道・大門坂を歩き始める'], ['10:00頃', '熊野那智大社・那智山青岸渡寺を参拝'], ['11:30頃', '那智の滝を見学'], ['13:30頃', '大阪へ出発（途中で休憩1回）'], ['19:30', '南森町でレンタカー返却'],
];
const essentials = ['運転免許証（運転する人全員）', '現金（宿泊代は現地払い・カード利用不可）', 'スマートフォン、充電器、モバイルバッテリー', '滑りにくい歩きやすい靴', '雨具、タオル、虫よけ、常備薬', '着替え・洗面用品・翌日の歩行用の服装'];

function Timeline({ items }: { items: string[][] }) {
  return <ol className="timeline">{items.map(([time, detail]) => <li key={`${time}-${detail}`}><time>{time}</time><span>{detail}</span></li>)}</ol>;
}

export default function Home() {
  return <main>
    <header className="site-header"><a className="brand" href="#top" aria-label="ページの先頭へ"><span>伊勢・鳥羽</span><strong>熊野古道</strong></a><nav aria-label="ページ内メニュー"><a href="#schedule">行程</a><a href="#highlights">見どころ</a><a href="#prepare">準備</a></nav></header>
    <section className="hero" id="top"><img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Kumano_Kodo_pilgrimage_route_Daimon-zaka_World_heritage_%E7%86%8A%E9%87%8E%E5%8F%A4%E9%81%93_%E5%A4%A7%E9%96%80%E5%9D%8203.JPG" alt="杉並木と石畳が続く熊野古道・大門坂" /><div className="hero-overlay" /><div className="hero-content"><p className="eyebrow">2026.09.21 MON — 09.22 TUE</p><h1>森と海をめぐる<br />1泊2日の旅</h1><p className="hero-copy">伊勢の朝、鳥羽の海、そして熊野古道へ。</p><p className="members">たくと・和子</p></div></section>
    <section className="quick-facts" aria-label="旅の基本情報"><div><Car aria-hidden="true" /><span>大阪発着・レンタカー</span></div><div><MapPin aria-hidden="true" /><span>宿泊：熊野市・紀南荘</span></div><div><Clock3 aria-hidden="true" /><span>9/21 18:00 チェックイン</span></div></section>
    <section className="section schedule-section" id="schedule"><div className="section-intro"><p className="section-number">01 / SCHEDULE</p><h2>旅の行程</h2></div><div className="days"><article className="day-card"><p className="day-label">DAY 1　9/21（月・祝）</p><h3>大阪 → 伊勢 → 鳥羽 → 熊野市</h3><Timeline items={dayOne} /></article><article className="day-card"><p className="day-label">DAY 2　9/22（火・祝）</p><h3>熊野市 → 那智山 → 大阪</h3><Timeline items={dayTwo} /></article></div><aside className="notice"><ShieldAlert aria-hidden="true" /><p><strong>1日目は時間に注意。</strong> 紀南荘は18:00チェックインです。鳥羽水族館を出た後は休憩を1回に絞り、遅れそうなら宿へ連絡します。</p></aside></section>
    <section className="section highlights" id="highlights"><div className="section-intro"><p className="section-number">02 / HIGHLIGHTS</p><h2>この旅の見どころ</h2></div><div className="highlight-grid"><article><span>01</span><h3>伊勢神宮・内宮</h3><p>宇治橋を渡り、五十鈴川と森の参道を歩く。朝の静けさの中で、旅の始まりを味わう場所。</p></article><article><span>02</span><h3>おかげ横丁</h3><p>伊勢うどんや赤福を楽しめる門前町。江戸から明治を思わせる町並みも魅力。</p></article><article><span>03</span><h3>鳥羽水族館</h3><p>ジュゴン、ラッコ、スナドリネコなど、個性豊かな生きものに会える3時間。</p></article><article><span>04</span><h3>熊野古道・大門坂</h3><p>杉並木と石畳が続く参詣道。熊野古道らしい景色を、ゆっくり歩いて感じる。</p></article><article><span>05</span><h3>熊野那智大社・青岸渡寺</h3><p>朱塗りの社殿と寺院が隣り合う、熊野の信仰と歴史を感じられる場所。</p></article><article><span>06</span><h3>那智の滝</h3><p>高さ133mの大瀑布。飛瀧神社の御神体でもある、熊野観光の締めくくり。</p></article></div></section>
    <section className="section prepare" id="prepare"><div className="section-intro"><p className="section-number">03 / PREPARE</p><h2>持ち物と当日のこと</h2></div><div className="prepare-grid"><article className="packing-card"><Footprints aria-hidden="true" /><h3>持ち物</h3><ul>{essentials.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article><article className="payment-card"><WalletCards aria-hidden="true" /><h3>費用の目安</h3><p className="total">38,736円</p><p>宿泊・レンタカーの確定分（2人合計）</p><p className="small">高速代、ガソリン代、水族館入館料、食事代は別です。</p></article></div></section>
    <footer><p>安全運転で、いい旅にしよう。</p><p className="credit">写真：<a href="https://commons.wikimedia.org/wiki/File:Kumano_Kodo_pilgrimage_route_Daimon-zaka_World_heritage_%E7%86%8A%E9%87%8E%E5%8F%A4%E9%81%93_%E5%A4%A7%E9%96%80%E5%9D%8203.JPG">Wikimedia Commons</a></p></footer>
  </main>;
}
