
class ApiFeatures {
  constructor(query, querystr) {
    this.query = query;
    this.querystr = querystr;
  }
  search() {
    const keyword = this.querystr.keyword
      ? {
        name: {
          $regex:
            this.querystr.keyword,
          $options: "i",
        },
      }
      : {};
    console.log(keyword);
    this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.querystr };

    // Removing fields in the query that are not related to the category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);


    let stringOfQuery = JSON.stringify(queryCopy);
    stringOfQuery = stringOfQuery.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(stringOfQuery));
    return this;
  }
}
module.exports = ApiFeatures;