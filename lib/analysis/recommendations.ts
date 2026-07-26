import type {
  Recommendation,
  SeoAnalysisInput,
} from "./types";


export function buildRecommendations(
  analysis: SeoAnalysisInput
): Recommendation[] {
  const recommendations: Recommendation[] = [];


  // タイトル
  if (analysis.titleLength < 25) {
    recommendations.push({
      type: "warning",
      title: "タイトル",
      message:
        "タイトルが短めです。25〜35文字がおすすめです。",
    });
  } else if (analysis.titleLength > 35) {
    recommendations.push({
      type: "warning",
      title: "タイトル",
      message:
        "タイトルが長めです。35文字以内がおすすめです。",
    });
  } else {
    recommendations.push({
      type: "good",
      title: "タイトル",
      message:
        "タイトル文字数は適切です。",
    });
  }


  // Description
  if (analysis.descriptionLength < 80) {
    recommendations.push({
      type: "warning",
      title: "Description",
      message:
        "Descriptionが短めです。80〜140文字がおすすめです。",
    });
  } else if (analysis.descriptionLength > 140) {
    recommendations.push({
      type: "warning",
      title: "Description",
      message:
        "Descriptionが長めです。140文字以内がおすすめです。",
    });
  } else {
    recommendations.push({
      type: "good",
      title: "Description",
      message:
        "Descriptionの長さは適切です。",
    });
  }


  // 本文
  if (analysis.wordCount < 2000) {
    recommendations.push({
      type: "warning",
      title: "本文",
      message:
        "本文量が少なめです。2000文字以上がおすすめです。",
    });
  } else {
    recommendations.push({
      type: "good",
      title: "本文",
      message:
        "十分な文字数があります。",
    });
  }


  // H1
  if (analysis.h1Count !== 1) {
    recommendations.push({
      type: "bad",
      title: "H1",
      message:
        "H1タグは1つだけにしてください。",
    });
  } else {
    recommendations.push({
      type: "good",
      title: "H1",
      message:
        "H1タグは正常です。",
    });
  }


  // H2
  if (analysis.h2Count < 2) {
    recommendations.push({
      type: "warning",
      title: "H2",
      message:
        "H2を追加すると記事構成が分かりやすくなります。",
    });
  } else {
    recommendations.push({
      type: "good",
      title: "H2",
      message:
        "見出し構成は問題ありません。",
    });
  }


  // 画像
  if (analysis.imageCount === 0) {
    recommendations.push({
      type: "warning",
      title: "画像",
      message:
        "画像を追加すると読みやすさが向上します。",
    });
  } else {
    recommendations.push({
      type: "good",
      title: "画像",
      message:
        `${analysis.imageCount}枚の画像があります。`,
    });
  }


  // alt
  if (analysis.altMissingCount > 0) {
    recommendations.push({
      type: "bad",
      title: "alt属性",
      message:
        `${analysis.altMissingCount}枚の画像でalt属性が未設定です。`,
    });
  } else {
    recommendations.push({
      type: "good",
      title: "alt属性",
      message:
        "画像のalt属性は設定されています。",
    });
  }


  // 内部リンク
  if (analysis.internalLinkCount < 3) {
    recommendations.push({
      type: "warning",
      title: "内部リンク",
      message:
        "関連記事への内部リンクを追加しましょう。",
    });
  } else {
    recommendations.push({
      type: "good",
      title: "内部リンク",
      message:
        "内部リンク数は十分です。",
    });
  }


  return recommendations;
}