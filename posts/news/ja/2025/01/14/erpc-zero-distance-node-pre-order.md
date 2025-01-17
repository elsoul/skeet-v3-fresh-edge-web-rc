---
id: erpc-zero-distance-node-pre-order
title: ERPC、Solana 向けに最速パフォーマンスを追求する「専有ゼロ距離ノード」を先行販売開始
category: プレスリリース
thumbnail: /news/2025/01/14/ERPC-Zero-Distance-Node-Pre-orderJA.jpg
---

ELSOUL LABO B.V.（本社: オランダ・アムステルダム、代表取締役 CEO: 川崎文武）は、より高速な Solana 体験を目指して、これまでの研究とバトルテストの成果を結集した「専有ゼロ距離ノード」を発表し、先行販売を開始したことをお知らせします。

アプリケーションを高速かつ安定して実行するためのノード構成を探究した結果、Solana RPC サーバーと専用ベアメタルサーバーを同一プライベートスイッチ上に直結する「ゼロ距離通信」が、最速パフォーマンスの実現において最適であることを突き止めました。すでに多くのトレーダーや高頻度取引ユーザーからお問い合わせをいただいており、今後も需要拡大が予想されます。

## ハイパフォーマンスと超低レイテンシへのこだわり

かねてより当社では、業界トップレベルの超低レイテンシを目指して開発を続けてまいりました。実際にトランザクションやスロットの数ミリ秒単位の違いが結果に影響するトレーダーの方々から、多くのフィードバックをいただきながら改善を重ね、好評をいただいております。

一方で、「他社製の専有RPCノードをレンタルし、Solanaアプリケーションを直接実行したら、当社の共有RPCを使うより遅くなった」という声をよく耳にします。その背景には、同じマシンで複数プログラムを起動することで、Solana RPC が性能向上に必要とするリソースを奪われてしまう問題があります。

たとえ最高品質のCPUやメモリを用意していても、プログラムが小規模に見えても、同一マシンでアプリを動かせばリソースを食い合い、結果的にパフォーマンスは落ちてしまいます。

Solana RPC は単独で動作させるほど最大限の性能を発揮する設計であり、他プロセスとの競合を避けることが肝要です。

さらに、Solana RPC は攻撃対象になりやすいため、セキュリティ対策を怠るとノード全体の処理効率が下がる危険性もあります。

ERPC では基本的なセキュリティ設定に加え、動的なセキュリティ対策も実施しており、Solana RPC の安定性を確保しています。

## 研究とバトルテストを重ねた結果導き出した結論

![ERPC](/news/2025/01/14/ERPCzero-distance-nodeJA.jpg)

当社は長期間にわたる検証と実運用テストを行い、Solana RPC とアプリケーションを物理的に分離しながらも、ネットワーク的には「ゼロ距離」に近づける構成こそが最速のパフォーマンスを得る鍵だと確信しました。

- **RPC は RPC の役割に専念する:** 攻撃リスクの高いRPC部分を厳格に管理し、CPU・メモリなどのハードウェアリソースをフルに活かせるようにすることで、ピーク時でもリクエスト処理が安定します。
- **アプリケーションは専用ベアメタルで隔離する:** 同一のノード上に載せるのではなく、別の高性能サーバーで動かすことで、リソース競合を防止。どちらにも最大限の処理能力を割けるようになります。
- **同じプライベートスイッチで直結する「ゼロ距離通信」:** ノードとアプリの間に余計な通信経路を挟まないことで、ネットワークレイテンシを削減します。物理的な距離がパフォーマンスを左右する大きな要因であるため、直結により圧倒的な高速化を実現できます。

この仕組みにより、どちらかに負荷がかかっても互いの処理を妨げず、それぞれが最高のパフォーマンスを発揮できます。

## 専有RPCと共有RPC、どちらでも効果を発揮

![ERPC](/news/2025/01/14/ERPCzero-distance-node-meritJA.jpg)

最も高い成功率を求めるのであれば「専有RPC」と組み合わせるのが理想ですが、当社の共有RPCと同じプライベートスイッチに「専有ゼロ距離ノード」を接続するだけでも、通常の遠隔接続よりはるかに優れたパフォーマンスが得られます。

- 専有RPCほどのトランザクション成功率は期待できなくとも、ゼロ距離ノード導入だけでレイテンシが大幅に減少し、多くのケースで速度向上が見込めます。
- 攻撃リスクやリソースの奪い合いを抑え、よりスムーズなトランザクション処理を実現できます。

## リソースの需給状況とリージョン展開

すでに本ノード及び専有RPCノードに関するお問い合わせが多数寄せられており、Solana RPC・ベアメタルサーバーともリソースが不足しがちな状況です。現時点で、サーバーの仕入れに1〜2週間ほどいただいていますが、需要のさらなる増大が見込まれ、さらに時間を要する可能性もあります。

- 初期対応リージョンは Amsterdam, Frankfurt, Ashburn, Tokyo の4拠点です。
- 今後は New York, London, Paris などへの拡張も順次検討しています。

高速環境をお急ぎの方には、今回の先行販売期間内でのお申し込みを強くおすすめします。

## 今後の展望

当社は、ハイパフォーマンスな Solana インフラの研究開発を継続し、あらゆる分野で超低レイテンシを活かしたアプリケーションを運用できる環境を提供していきます。これまで培ってきたノウハウをもとに、さらに最適なシステム構築やセキュリティ強化を進め、より多くの方々が Solana の高速性をフルに活用できるよう支援してまいります。

## 参考情報・お問い合わせ

ERPC 公式ウェブサイト: https://erpc.global/ja

Validators DAO 公式 Discord: https://discord.gg/C7ZQSrCkYR