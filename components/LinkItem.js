export default ({ data }) => (
  <div>
    <a href={data.url} title={data.description} target={'_blank'}>{data.title}</a>
  </div>
)
