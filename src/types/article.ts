export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  date: string;
  slug: string;
}

export interface Category {
  name: string;
  count: number;
  icon: string;
  description: string;
}

export interface ArticleFile {
  filename: string;
  title: string;
  description: string;
  category: string;
  date: string;
  content: string;
}
