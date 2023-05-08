const PostResult = ({ resource }: { resource: { result: { read: () => null } } }) => {
  const data = resource.result.read();

  if (!data) {
    return null;
  }

  return <div>the result of the post request: {JSON.stringify(data)}</div>;
};

export default PostResult;
