const initialState = {
  blogs: [
    {
      id: "0",
      title: "Mamma mia",
      author: "Pasta la vista",
      headline: "Pineapple pizza",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a elementum est. Sed massa augue, laoreet quis ornare quis, fermentum vel tortor. Nullam sed justo ultrices, bibendum diam in, convallis nisi. Aenean et justo sed sem pharetra ultrices ac nec lectus. Integer non dignissim eros, nec porta magna. Vivamus orci velit, aliquam in congue ut, semper non nibh. Mauris porttitor eu lorem a ullamcorper. Donec vel risus id elit bibendum tristique et iaculis odio. Phasellus vel nisi imperdiet, tempus risus ut, porta libero. Duis elementum nisi quis est volutpat tincidunt eu ac orci. Curabitur tempus non felis sed convallis. Ut volutpat vehicula rutrum. Sed fermentum ornare feugiat.\n" +
        "\n" +
        "In sem justo, aliquet sit amet posuere in, maximus quis diam. Donec et auctor dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean felis lacus, facilisis nec quam id, condimentum pretium orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus condimentum risus dui, interdum fermentum purus ultrices sed. Duis vel sapien a lectus volutpat tincidunt sed in sapien. Ut eu augue pellentesque, tincidunt dolor sed, vestibulum tortor. Nunc venenatis massa ut enim vulputate, sed eleifend nunc malesuada. Etiam tristique aliquet libero in laoreet. Integer ut augue non justo egestas pellentesque. Nunc purus elit, vehicula ac augue ac, tincidunt iaculis nisl. Mauris luctus finibus eros ac vulputate. Vestibulum rutrum lorem vel dictum pulvinar. Aliquam consectetur justo id neque accumsan, in consequat enim venenatis. Aliquam ut dapibus elit.\n" +
        "\n" +
        "Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sit amet luctus lorem, ut luctus quam. Ut est nibh, egestas sit amet nulla ac, sagittis vehicula nisi. Suspendisse potenti. Sed ac nibh sed ipsum feugiat imperdiet. Praesent eu ultricies est. Nam in hendrerit magna, a ultrices sapien. Quisque ac hendrerit dui. Sed et dolor et odio vestibulum dictum vitae quis mi. Ut efficitur lorem nec tortor eleifend finibus. Phasellus quis tristique lectus. Donec non velit placerat, dictum dolor non, vehicula ligula. Ut vel interdum tellus.\n" +
        "\n" +
        "Nunc commodo risus non justo molestie venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sed imperdiet nibh, eget aliquam est. Quisque efficitur turpis quis ultrices gravida. Pellentesque metus massa, tristique id elementum lobortis, tristique a eros. Nunc tempor tortor vel mi sollicitudin condimentum. Sed id metus dui. Suspendisse lobortis massa vitae aliquam eleifend. Aenean dignissim condimentum elit id placerat. Praesent et nisl sem.\n" +
        "\n" +
        "Etiam eu dapibus erat, eu facilisis nunc. Mauris vestibulum congue ex, eu maximus libero auctor quis. Nullam magna arcu, gravida id suscipit a, condimentum ac lectus. In imperdiet mauris nec lorem semper, in vestibulum ligula dictum. Integer at vulputate purus. Quisque molestie convallis tellus eget pulvinar. Pellentesque rhoncus lorem at volutpat cursus. Donec a volutpat risus. Curabitur ornare mi vitae ante feugiat facilisis.\n" +
        "\n" +
        "Donec eleifend lorem nec metus efficitur venenatis. Vivamus lacinia accumsan ex, eu fermentum orci feugiat sit amet. Proin vel luctus urna. Fusce tristique convallis ullamcorper. Fusce elementum dui sit amet risus imperdiet cursus. Aenean nisi urna, scelerisque non mattis vitae, mattis ut elit. Aliquam scelerisque felis maximus molestie interdum. Aliquam eget sem eget est hendrerit mattis.\n" +
        "\n" +
        "Praesent fringilla ut tortor quis lacinia. Etiam at felis mi. Nam imperdiet aliquet aliquam. Ut pellentesque urna sit amet massa blandit ultricies. Vivamus a blandit nulla. Mauris diam sem, dapibus ut tempus volutpat, mollis at risus. Donec quis euismod est. Phasellus rhoncus mauris sed ex laoreet porttitor. Nulla mattis semper arcu ut consectetur. Morbi venenatis sapien elit, finibus aliquet lacus molestie eget. Duis eu metus in libero sollicitudin mollis id non sapien. Nam ex metus, scelerisque a ipsum efficitur, molestie viverra nisi.\n" +
        "\n" +
        "Curabitur massa tellus, imperdiet ac aliquet interdum, finibus quis tellus. Pellentesque eu rhoncus libero, sit amet maximus felis. Vivamus sed rutrum lorem, a placerat tortor. Curabitur eu dignissim ipsum. Donec aliquet, ex nec tempus mattis, mauris purus dapibus magna, eu vulputate quam velit in elit. Donec nulla diam, venenatis et ipsum nec, pharetra sodales enim. Praesent mauris augue, hendrerit consequat tincidunt sit amet, varius ut libero. Vivamus egestas ullamcorper orci, id ornare orci. Maecenas vel nibh non leo aliquet rutrum in vehicula erat. Phasellus dui risus, pulvinar a rutrum et, tempus sit amet elit. Pellentesque tempus est sed purus dignissim, eget volutpat lorem varius. Maecenas et mi egestas, bibendum dolor sit amet, tincidunt arcu. Nulla porta eros quis lectus tempor tincidunt. Phasellus et blandit magna. Curabitur sagittis augue porta nisl mollis pretium. Donec pellentesque, nisl vel pretium aliquet, dui est dictum augue, ut tristique metus odio non lorem.\n" +
        "\n" +
        "In tincidunt, arcu id blandit tempor, tellus dui consequat enim, et lacinia enim neque sit amet orci. Nam gravida maximus ex, vel volutpat lacus ultrices ut. Donec in magna faucibus, faucibus dui placerat, malesuada nulla. Nulla ullamcorper lectus a massa tempus, sit amet rhoncus nibh mattis. Maecenas pellentesque fringilla sem vel pretium. In non lacus consectetur, laoreet tortor varius, ultricies dui. Suspendisse feugiat sed nisi in euismod. Sed ullamcorper tincidunt eros, ac dictum ligula semper eget. Aliquam at maximus dolor, ac accumsan metus. Donec consequat luctus urna, ac molestie mauris vehicula eu. Donec nec massa turpis. Donec pretium libero sed laoreet sodales. Aliquam ac efficitur arcu, nec condimentum eros. Morbi sed feugiat diam.\n" +
        "\n" +
        "Pellentesque ligula ligula, sagittis vitae dignissim sed, gravida et quam. Nulla non tortor enim. Sed sed aliquam lorem. Nulla quis dapibus erat. Aliquam facilisis pharetra leo, vel hendrerit nisi lobortis ut. Praesent molestie sollicitudin sodales. Suspendisse semper est in massa finibus, euismod lacinia velit viverra. Duis tortor elit, consequat sit amet maximus non, luctus quis libero. Morbi placerat quam at leo facilisis volutpat. Nullam nunc risus, posuere ut urna at, tincidunt congue nisi.",
    },
    {
      id: "1",
      title: "Lorem ipsum",
      author: "Dolores",
      headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a elementum est. Sed massa augue, laoreet quis ornare quis, fermentum vel tortor. Nullam sed justo ultrices, bibendum diam in, convallis nisi. Aenean et justo sed sem pharetra ultrices ac nec lectus. Integer non dignissim eros, nec porta magna. Vivamus orci velit, aliquam in congue ut, semper non nibh. Mauris porttitor eu lorem a ullamcorper. Donec vel risus id elit bibendum tristique et iaculis odio. Phasellus vel nisi imperdiet, tempus risus ut, porta libero. Duis elementum nisi quis est volutpat tincidunt eu ac orci. Curabitur tempus non felis sed convallis. Ut volutpat vehicula rutrum. Sed fermentum ornare feugiat.\n" +
        "\n" +
        "In sem justo, aliquet sit amet posuere in, maximus quis diam. Donec et auctor dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean felis lacus, facilisis nec quam id, condimentum pretium orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus condimentum risus dui, interdum fermentum purus ultrices sed. Duis vel sapien a lectus volutpat tincidunt sed in sapien. Ut eu augue pellentesque, tincidunt dolor sed, vestibulum tortor. Nunc venenatis massa ut enim vulputate, sed eleifend nunc malesuada. Etiam tristique aliquet libero in laoreet. Integer ut augue non justo egestas pellentesque. Nunc purus elit, vehicula ac augue ac, tincidunt iaculis nisl. Mauris luctus finibus eros ac vulputate. Vestibulum rutrum lorem vel dictum pulvinar. Aliquam consectetur justo id neque accumsan, in consequat enim venenatis. Aliquam ut dapibus elit.\n" +
        "\n" +
        "Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sit amet luctus lorem, ut luctus quam. Ut est nibh, egestas sit amet nulla ac, sagittis vehicula nisi. Suspendisse potenti. Sed ac nibh sed ipsum feugiat imperdiet. Praesent eu ultricies est. Nam in hendrerit magna, a ultrices sapien. Quisque ac hendrerit dui. Sed et dolor et odio vestibulum dictum vitae quis mi. Ut efficitur lorem nec tortor eleifend finibus. Phasellus quis tristique lectus. Donec non velit placerat, dictum dolor non, vehicula ligula. Ut vel interdum tellus.\n" +
        "\n" +
        "Nunc commodo risus non justo molestie venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sed imperdiet nibh, eget aliquam est. Quisque efficitur turpis quis ultrices gravida. Pellentesque metus massa, tristique id elementum lobortis, tristique a eros. Nunc tempor tortor vel mi sollicitudin condimentum. Sed id metus dui. Suspendisse lobortis massa vitae aliquam eleifend. Aenean dignissim condimentum elit id placerat. Praesent et nisl sem.\n" +
        "\n" +
        "Etiam eu dapibus erat, eu facilisis nunc. Mauris vestibulum congue ex, eu maximus libero auctor quis. Nullam magna arcu, gravida id suscipit a, condimentum ac lectus. In imperdiet mauris nec lorem semper, in vestibulum ligula dictum. Integer at vulputate purus. Quisque molestie convallis tellus eget pulvinar. Pellentesque rhoncus lorem at volutpat cursus. Donec a volutpat risus. Curabitur ornare mi vitae ante feugiat facilisis.\n" +
        "\n" +
        "Donec eleifend lorem nec metus efficitur venenatis. Vivamus lacinia accumsan ex, eu fermentum orci feugiat sit amet. Proin vel luctus urna. Fusce tristique convallis ullamcorper. Fusce elementum dui sit amet risus imperdiet cursus. Aenean nisi urna, scelerisque non mattis vitae, mattis ut elit. Aliquam scelerisque felis maximus molestie interdum. Aliquam eget sem eget est hendrerit mattis.\n" +
        "\n" +
        "Praesent fringilla ut tortor quis lacinia. Etiam at felis mi. Nam imperdiet aliquet aliquam. Ut pellentesque urna sit amet massa blandit ultricies. Vivamus a blandit nulla. Mauris diam sem, dapibus ut tempus volutpat, mollis at risus. Donec quis euismod est. Phasellus rhoncus mauris sed ex laoreet porttitor. Nulla mattis semper arcu ut consectetur. Morbi venenatis sapien elit, finibus aliquet lacus molestie eget. Duis eu metus in libero sollicitudin mollis id non sapien. Nam ex metus, scelerisque a ipsum efficitur, molestie viverra nisi.\n" +
        "\n" +
        "Curabitur massa tellus, imperdiet ac aliquet interdum, finibus quis tellus. Pellentesque eu rhoncus libero, sit amet maximus felis. Vivamus sed rutrum lorem, a placerat tortor. Curabitur eu dignissim ipsum. Donec aliquet, ex nec tempus mattis, mauris purus dapibus magna, eu vulputate quam velit in elit. Donec nulla diam, venenatis et ipsum nec, pharetra sodales enim. Praesent mauris augue, hendrerit consequat tincidunt sit amet, varius ut libero. Vivamus egestas ullamcorper orci, id ornare orci. Maecenas vel nibh non leo aliquet rutrum in vehicula erat. Phasellus dui risus, pulvinar a rutrum et, tempus sit amet elit. Pellentesque tempus est sed purus dignissim, eget volutpat lorem varius. Maecenas et mi egestas, bibendum dolor sit amet, tincidunt arcu. Nulla porta eros quis lectus tempor tincidunt. Phasellus et blandit magna. Curabitur sagittis augue porta nisl mollis pretium. Donec pellentesque, nisl vel pretium aliquet, dui est dictum augue, ut tristique metus odio non lorem.\n" +
        "\n" +
        "In tincidunt, arcu id blandit tempor, tellus dui consequat enim, et lacinia enim neque sit amet orci. Nam gravida maximus ex, vel volutpat lacus ultrices ut. Donec in magna faucibus, faucibus dui placerat, malesuada nulla. Nulla ullamcorper lectus a massa tempus, sit amet rhoncus nibh mattis. Maecenas pellentesque fringilla sem vel pretium. In non lacus consectetur, laoreet tortor varius, ultricies dui. Suspendisse feugiat sed nisi in euismod. Sed ullamcorper tincidunt eros, ac dictum ligula semper eget. Aliquam at maximus dolor, ac accumsan metus. Donec consequat luctus urna, ac molestie mauris vehicula eu. Donec nec massa turpis. Donec pretium libero sed laoreet sodales. Aliquam ac efficitur arcu, nec condimentum eros. Morbi sed feugiat diam.\n" +
        "\n" +
        "Pellentesque ligula ligula, sagittis vitae dignissim sed, gravida et quam. Nulla non tortor enim. Sed sed aliquam lorem. Nulla quis dapibus erat. Aliquam facilisis pharetra leo, vel hendrerit nisi lobortis ut. Praesent molestie sollicitudin sodales. Suspendisse semper est in massa finibus, euismod lacinia velit viverra. Duis tortor elit, consequat sit amet maximus non, luctus quis libero. Morbi placerat quam at leo facilisis volutpat. Nullam nunc risus, posuere ut urna at, tincidunt congue nisi.",
    }],
  comments: [
    {
      page: 0,
      user: "Michel Michel",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
      created: "1 minute ago"
    },
    {
      page: 0,
      user: "Michel Michel",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
      created: "1 minute ago"
    },
    {
      page: 1,
      user: "Michel Michel",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
      created: "1 minute ago"
    },
    {
      page: 1,
      user: "Michel Michel",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
      created: "1 minute ago"
    }
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_BLOG") {
    return Object.assign({}, state, {
      blogs: state.blogs.concat(action.payload)
    });
  }
  if (action.type === "DELETE_BLOG") {
    const id = action.payload;
    const newBlogs = state.blogs.filter(blog => blog.id !== id);
    return Object.assign({}, state, {
      blogs: newBlogs
    })
  }
  if (action.type === "ADD_COMMENT") {
    return Object.assign({}, state, {
      blogs: state.comments.concat(action.payload)
    });
  }
  return state;
};
export default rootReducer;
