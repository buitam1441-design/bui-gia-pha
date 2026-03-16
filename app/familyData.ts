export type SpouseType = {
  name: string;
  years?: string;
  title?: string;
  location?: string;
  story?: string;
  photo?: string;
};

export type PersonType = {
  id: string;
  name: string;
  years?: string;
  title?: string;
  location?: string;
  story?: string;
  color?: string;
  photo?: string;
  spouses?: SpouseType[];
  children?: PersonType[];
};

export const familyTree: PersonType = {
  id: "bui-van-le",
  name: "Bùi Văn Lệ",
  years: "1870-1930",
  title: "Tổ tiên dòng họ",
  location: "Gio An",
  story: "Người khai tổ của nhánh gia phả này.",
  color: "#f8f1e4",
  children: [
    {
      id: "bui-van-doa",
      name: "Bùi Văn Đóa",
      years: "1885-1903",
      color: "#d96ad9",
    },
    {
      id: "bui-thi-diu",
      name: "Bùi Thị Điu",
      years: "1889-?",
      color: "#d96ad9",
      spouses: [
        {
          name: "Ngô Trí Cựu",
          title: "Chồng",
        },
      ],
    },
    {
      id: "bui-van-bieu",
      name: "Bùi Văn Biều",
      years: "1891-1909",
      color: "#d96ad9",
    },
    {
      id: "bui-thi-kieu",
      name: "Bùi Thị Kiều",
      years: "1893-?",
      color: "#d96ad9",
      spouses: [
        {
          name: "Nguyễn Văn Tấn",
          title: "Chồng",
        },
      ],
    },
    {
      id: "bui-van-xuan-dieu",
      name: "Bùi Văn Xuân (Điều)",
      years: "1896-1972",
      color: "#d96ad9",
      spouses: [
        {
          name: "Hoàng Thị Xuân",
          title: "Vợ",
        },
      ],
      children: [
        {
          id: "bui-thi-cong",
          name: "Bùi Thị Công",
          years: "1928-2021",
          color: "#fffaf5",
          spouses: [
            {
              name: "Hoàng Văn Tự",
              title: "Chồng",
            },
          ],
        },
        {
          id: "bui-thi-trong",
          name: "Bùi Thị Trọng",
          years: "1934-1953",
          color: "#fffaf5",
        },
        {
          id: "bui-van-vong",
          name: "Bùi Văn Vọng",
          years: "1930-2014",
          title: "Nhánh trưởng",
          location: "Gio An",
          color: "#cf4b7a",
          spouses: [
            {
              name: "Nguyễn Thị Hồng",
              title: "Vợ",
              years: "1940-nay",
            },
          ],
          children: [
            {
              id: "bui-van-tinh",
              name: "Bùi Văn Tỉnh",
              years: "19/05/1964-nay",
              title: "Trưởng tộc",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Trần Thị Thành",
                  title: "Vợ",
                  years: "15/06/1976-nay",
                },
              ],
              children: [
                {
                  id: "bui-thi-tu",
                  name: "Bùi Thị Tú",
                  years: "15/06/1996-nay",
                  color: "#fffaf5",
                  spouses: [
                    {
                      name: "Hoàng Văn Lệnh",
                      title: "Chồng",
                      years: "10/10/1993-nay",
                    },
                  ],
                },
                {
                  id: "bui-thi-lan-1998",
                  name: "Bùi Thị Lan",
                  years: "20/06/1998-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-phung-tien",
                  name: "Bùi Phùng Tiên",
                  years: "2000-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-huy-hoang",
                  name: "Bùi Huy Hoàng",
                  years: "01/01/2003-nay",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-van-tuc",
              name: "Bùi Văn Túc",
              years: "1966-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Bùi Thị Nhân",
                  title: "Vợ",
                },
              ],
              children: [
                {
                  id: "bui-thi-quyen",
                  name: "Bùi Thị Quyên",
                  color: "#fffaf5",
                },
                {
                  id: "bui-van-phu",
                  name: "Bùi Văn Phú",
                  color: "#fffaf5",
                },
                {
                  id: "bui-van-thang",
                  name: "Bùi Văn THắng",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-thi-dong",
              name: "Bùi Thị Đông",
              years: "1968-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Nguyễn Văn Biên",
                  title: "Chồng",
                },
              ],
            },
            {
              id: "bui-van-thanh",
              name: "Bùi Văn Thành",
              years: "1972-nay",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Võ Thị Hoài",
                  title: "Vợ",
                },
              ],
              children: [
                {
                  id: "bui-thi-tra",
                  name: "Bùi Thị Trà",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thi-giang",
                  name: "Bùi Thị Giang",
                  color: "#fffaf5",
                },
                {
                  id: "bui-van-tuan",
                  name: "Bùi Văn Tuấn",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thi-bao-chau",
                  name: "Bùi Thị Bảo Châu",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thi-bao-ngoc",
                  name: "Bùi Thị Bảo Ngọc",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-thi-hanh",
              name: "Bùi Thị Hạnh",
              years: "1974-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Nguyễn Văn Tòng",
                  title: "Chồng",
                },
              ],
            },
            {
              id: "bui-thi-thanh-1976",
              name: "Bùi Thị Thanh",
              years: "1976-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Phạm Văn Diễn",
                  title: "Chồng",
                  years: "?-nay",
                },
              ],
            },
            {
              id: "bui-van-minh",
              name: "Bùi Văn Minh",
              years: "1988-nay",
              color: "#fffaf5",
            },
          ],
        },
      ],
    },
    {
      id: "bui-thi-gia",
      name: "Bùi Thị Giá",
      years: "1939-?",
      color: "#fffaf5",
      spouses: [
        {
          name: "Võ Qúy Hiệp",
          title: "Chồng",
        },
      ],
    },
    {
      id: "bui-thi-nha",
      name: "Bùi Thị Nha",
      years: "1902-1930",
      color: "#fffaf5",
      spouses: [
        {
          name: "Võ Đăng Châu",
          title: "Chồng",
        },
      ],
    },
    {
      id: "bui-van-nho",
      name: "Bùi Văn Nho",
      years: "1899-1950",
      color: "#d96ad9",
      spouses: [
        {
          name: "Nguyễn Thị Mịnh",
          title: "Vợ cả",
        },
        {
          name: "Nguyễn Thị Tải",
          title: "Vợ 2",
        },
      ],
      children: [
        {
          id: "bui-van-hoa",
          name: "Bùi Văn Hóa",
          years: "1927-?",
          location: "Gio An",
          color: "#cf4b7a",
          spouses: [
            {
              name: "Đặng Thị Dung",
              title: "Vợ",
              years: "1925-?",
            },
          ],
          children: [
            {
              id: "bui-van-nguyet",
              name: "Bùi Văn Nguyệt",
              years: "1958-2013",
              location: "Gio An",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Hoàng Thị Thảo",
                  title: "Vợ",
                  years: "1960-nay",
                },
              ],
              children: [
                {
                  id: "bui-van-song",
                  name: "Bùi Văn Song",
                  years: "1981-nay",
                  location: "Gio An",
                  color: "#cf4b7a",
                  spouses: [
                    {
                      name: "Nguyễn Thị Hà",
                      title: "Vợ",
                      years: "1982-nay",
                    },
                  ],
                  children: [
                    {
                      id: "bui-thi-song-ngan",
                      name: "Bùi Thị Song Ngân",
                      years: "2012-nay",
                      color: "#fffaf5",
                    },
                    {
                      id: "bui-nguyen-song-long",
                      name: "Bùi Nguyễn Song Long",
                      years: "2018-nay",
                      color: "#fffaf5",
                    },
                    {
                      id: "bui-nguyen-song-luan",
                      name: "Bùi Nguyễn Song Luân",
                      years: "2020-nay",
                      color: "#fffaf5",
                    },
                  ],
                },
                {
                  id: "bui-van-ngoc",
                  name: "Bùi Văn Ngọc",
                  years: "1984-nay",
                  color: "#cf4b7a",
                  spouses: [
                    {
                      name: "Ngô Thị Sương",
                      title: "Vợ",
                      years: "1994-nay",
                    },
                  ],
                  children: [
                    {
                      id: "bui-quoc-phong",
                      name: "Bùi Quốc Phong",
                      years: "2016-nay",
                      color: "#fffaf5",
                    },
                    {
                      id: "bui-quoc-dai",
                      name: "Bùi Quốc Đại",
                      years: "2020-nay",
                      color: "#fffaf5",
                    },
                  ],
                },
                {
                  id: "bui-thi-lan-1987",
                  name: "Bùi Thị Lan",
                  years: "1987-nay",
                  color: "#fffaf5",
                  spouses: [
                    {
                      name: "Nguyễn Ngọc Phát",
                      title: "Chồng",
                      years: "1983-nay",
                    },
                  ],
                },
                {
                  id: "bui-van-vinh",
                  name: "Bùi Văn Vinh",
                  years: "1989-nay",
                  color: "#cf4b7a",
                  spouses: [
                    {
                      name: "Nguyễn Thị Bình",
                      title: "Vợ",
                      years: "1995-nay",
                    },
                  ],
                  children: [
                    {
                      id: "bui-minh-quang",
                      name: "Bui Minh Quang",
                      color: "#fffaf5",
                    },
                  ],
                },
                {
                  id: "bui-thi-phuc",
                  name: "Bùi Thị Phúc",
                  years: "1993-nay",
                  color: "#fffaf5",
                  spouses: [
                    {
                      name: "Nguyễn Thành An",
                      title: "Chồng",
                      years: "1986-nay",
                    },
                  ],
                },
                {
                  id: "bui-thi-lanh",
                  name: "Bùi Thị Lành",
                  years: "1995-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thi-thuy",
                  name: "Bùi Thị Thủy",
                  years: "1997-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thi-mai-2001",
                  name: "Bùi Thị Mai",
                  years: "2001-nay",
                  color: "#fffaf5",
                },
              ],
            },
          ],
        },
        {
          id: "bui-van-sy",
          name: "Bùi Văn Sỹ",
          years: "1930-1948",
          color: "#fffaf5",
        },
        {
          id: "bui-van-bien",
          name: "Bùi Văn Biện",
          years: "1932-2008",
          color: "#cf4b7a",
          spouses: [
            {
              name: "Hoàng Thị Ngiêm",
              title: "Vợ",
              years: "1925-2007",
            },
          ],
          children: [
            {
              id: "bui-van-hoa-1962",
              name: "Bùi Văn Hòa",
              years: "06/06/1962-nay",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Hoàng Thị Thùy",
                  title: "Vợ",
                  years: "19/02/1967-nay",
                },
              ],
              children: [
                {
                  id: "bui-thi-tuyet",
                  name: "Bùi Thị Tuyết",
                  years: "1990-1998",
                  color: "#fffaf5",
                },
                {
                  id: "bui-van-phuong",
                  name: "Bùi Văn Phương",
                  years: "14/02/1992-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-van-truong",
                  name: "Bùi Văn Trường",
                  years: "20/11/1993-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thi-son",
                  name: "Bùi Thị Sơn",
                  years: "12/12/1994-nay",
                  color: "#fffaf5",
                  spouses: [
                    {
                      name: "Đặng Quốc Hoàng",
                      title: "Chồng",
                      years: "27/11/1994-nay",
                    },
                  ],
                },
                {
                  id: "bui-van-dong",
                  name: "Bùi Văn Đông",
                  years: "21/08/1996-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-van-bac",
                  name: "Bùi Văn Bắc",
                  years: "21/06/2000-nay",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-van-binh",
              name: "Bùi Văn Bình",
              years: "15/09/1965-01/09/2022",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Nguyễn Thị Hảo",
                  title: "Vợ",
                  years: "10/11/1975-nay",
                  story: "Mẹ của Bùi Thị Thanh, Bùi Văn Toàn và Bùi Văn Hiếu.",
                },
              ],
              children: [
                {
                  id: "bui-thi-thanh-1995",
                  name: "Bùi Thị Thanh",
                  years: "18/03/1995-nay",
                  color: "#fffaf5",
                  spouses: [
                    {
                      name: "Lô Văn Thơ",
                      title: "Chồng",
                      years: "1992-nay",
                    },
                  ],
                },
                {
                  id: "bui-van-toan",
                  name: "Bùi Văn Toàn",
                  years: "26/12/1997-nay",
                  title: "Hậu duệ dòng họ",
                  location: "Việt Nam / Australia",
                  story: "Đang xây dựng lại website gia phả cho dòng họ.",
                  color: "#fffaf5",
                  photo: "/photos/bui-van-toan.jpg",
                },
                {
                  id: "bui-van-hieu",
                  name: "Bùi Văn Hiếu",
                  years: "10/07/2001-nay",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-thi-loan",
              name: "Bùi Thị Loan",
              years: "01/07/1970-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Nguyễn Văn Hà",
                  title: "Chồng",
                  years: "1973-nay",
                },
              ],
            },
            {
              id: "bui-van-an",
              name: "Bùi Văn An",
              years: "20/10/1970-nay",
              location: "Gio An",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Phạm Thị Giang",
                  title: "Vợ",
                  years: "17/07/1978-nay",
                },
              ],
              children: [
                {
                  id: "bui-thi-long",
                  name: "Bùi Thị Long",
                  years: "31/05/2005-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thi-chau",
                  name: "Bùi Thị Châu",
                  years: "28/05/2008-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thi-mai-2013",
                  name: "Bùi Thị Mai",
                  years: "02/01/2013-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thi-nhan",
                  name: "Bùi Thị Nhân",
                  years: "02/02/2015-nay",
                  color: "#fffaf5",
                },
              ],
            },
          ],
        },
        {
          id: "bui-van-khuyen",
          name: "Bùi Văn Khuyên",
          years: "1938-2023",
          color: "#cf4b7a",
          spouses: [
            {
              name: "Võ Thị Ngụ",
              title: "Vợ",
              years: "02/03/1945-26/05/2023",
            },
          ],
          children: [
            {
              id: "bui-van-ky",
              name: "Bùi Văn Kỷ",
              years: "1966-nay",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Hoàng Thị Thông",
                  title: "Vợ",
                },
              ],
              children: [
                {
                  id: "bui-the-tron",
                  name: "Bùi Thế Trọn",
                  color: "#fffaf5",
                },
                {
                  id: "bui-nhu-y",
                  name: "Bùi Như Ý",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thien-ngo",
                  name: "Bùi Thiện Ngộ",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-thi-niem-1969",
              name: "Bùi Thị Niệm",
              years: "1969-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Nguyễn Đức Sự",
                  title: "Chồng",
                  years: "1961-2007",
                },
              ],
            },
            {
              id: "bui-van-khiem",
              name: "Bùi Văn Khiêm",
              years: "10/05/1972-nay",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Đặng Thị Giang",
                  title: "Vợ",
                  years: "31/12/1977-nay",
                },
              ],
              children: [
                {
                  id: "bui-quang-anh",
                  name: "Bùi Quang Anh",
                  years: "16/04/2006-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-ngoc-ha",
                  name: "Bùi Ngọc Hà",
                  years: "12/06/2010-nay",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-van-khoa",
              name: "Bùi Văn Khoa",
              years: "1975-nay",
              location: "Gio An",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Nguyễn Thị Liễu",
                  title: "Vợ",
                },
              ],
              children: [
                {
                  id: "bui-xuan-nhat",
                  name: "Bùi Xuân Nhật",
                  color: "#fffaf5",
                },
                {
                  id: "bui-bao-tran",
                  name: "Bùi Bảo Trân",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-thi-nga",
              name: "Bùi Thị Nga",
              years: "1978-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Phạm văn Thường",
                  title: "Chồng",
                },
              ],
            },
            {
              id: "bui-van-kha",
              name: "Bùi Văn Khả",
              years: "1981-nay",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Nguyễn Thị Lam",
                  title: "Vợ",
                },
              ],
              children: [
                {
                  id: "bui-thao-nguyen",
                  name: "Bùi Thảo Nguyên",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thien-long",
                  name: "Bùi Thiên Long",
                  color: "#fffaf5",
                },
                {
                  id: "bui-thuy-tien",
                  name: "Bùi Thủy Tiên",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-thi-nang",
              name: "Bùi Thị Năng",
              years: "1983-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Ngô Lớn",
                  title: "Chồng",
                },
              ],
            },
          ],
        },
        {
          id: "bui-thi-lon",
          name: "Bùi Thị Lơn",
          years: "1942-?",
          color: "#fffaf5",
          spouses: [
            {
              name: "Hoàng Văn Khai",
              title: "Chồng",
            },
          ],
        },
        {
          id: "bui-thi-liem",
          name: "Bùi Thị Liêm",
          years: "1946-nay",
          color: "#fffaf5",
          spouses: [
            {
              name: "Nguyễn Văn Khanh",
              title: "Chồng",
            },
          ],
        },
        {
          id: "bui-van-yem",
          name: "Bùi Văn Yêm",
          years: "1950-2017",
          location: "Gio An",
          color: "#cf4b7a",
          spouses: [
            {
              name: "Hoàng Thị Thân",
              title: "Vợ",
              years: "1956-2014",
            },
          ],
          children: [
            {
              id: "bui-thi-niem",
              name: "Bùi Thị Niêm",
              years: "1978-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Nguyễn Quang Triết",
                  title: "Chồng",
                },
              ],
            },
            {
              id: "bui-thi-nhung",
              name: "Bùi Thị Nhung",
              years: "1981-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Nguyễn Cảnh THuần",
                  title: "Chồng",
                  years: "1980-nay",
                },
              ],
            },
            {
              id: "bui-van-hung",
              name: "Bùi Văn Hùng",
              years: "1984-nay",
              color: "#cf4b7a",
              spouses: [
                {
                  name: "Phan Thị Thảo",
                  title: "Vợ",
                },
              ],
              children: [
                {
                  id: "bui-quang-huy",
                  name: "Bùi Quang Huy",
                  years: "2013-nay",
                  color: "#fffaf5",
                },
                {
                  id: "bui-ha-phuong",
                  name: "Bùi Hà Phương",
                  years: "2019-nay",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-thi-hang",
              name: "Bùi Thị Hằng",
              years: "1992-nay",
              color: "#fffaf5",
              children: [
                {
                  id: "bui-duc-thien-minh",
                  name: "Bùi Đức Thiên Minh",
                  years: "2020-nay",
                  color: "#fffaf5",
                },
              ],
            },
            {
              id: "bui-thi-hai",
              name: "Bùi Thị Hải",
              years: "1995-nay",
              color: "#fffaf5",
              spouses: [
                {
                  name: "Trần Văn Nhân",
                  title: "Chồng",
                  years: "1996-nay",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};