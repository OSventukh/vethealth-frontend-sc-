import { api } from '@/api';
import { auth } from '@/lib/next-auth/auth';
import EditPost from '../../components/EditPost';

type Props = { params: { slug: string } };

export default async function EditPostPage({ params }: Props) {
  const session = await auth();

  const { slug } = params;
  const post = await api.posts.getOne({
    slug,
    query: { include: 'categories,topics' },
    token: session?.token,
  });
  const topics = await api.topics.getMany({});
  const categories = await api.categories.getMany({});
  return (
    <EditPost
      initialData={post}
      topics={topics.items}
      categories={categories.items}
      editMode
    />
  );
}
