import { Question } from "@/lib/types";

// Bài 29: Khám phá phần mềm làm phim
export const questions: Question[] = [
  {
    "id": "b29-01",
    "q": "Thành phần nào trong giao diện phần mềm dựng phim là trục không gian hiển thị toàn bộ diễn biến của video theo trình tự thời gian?",
    "options": [
      "Dòng thời gian (Timeline)",
      "Màn hình xem trước (Preview Monitor)",
      "Khay chứa tệp tư liệu (Media Bin)",
      "Thanh trạng thái (Status Bar)"
    ],
    "answer": 0,
    "explain": "Timeline (Dòng thời gian) là khu vực cốt lõi nơi biên tập viên sắp xếp, cắt ghép các đoạn video, âm thanh và hiệu ứng theo trình tự thời gian."
  },
  {
    "id": "b29-02",
    "q": "Đầu đọc thời gian (Playhead / Time Indicator) trên dòng thời gian có vai trò gì?",
    "options": [
      "Chỉ thị chính xác vị trí thời điểm (giây, khung hình) đang được phát và hiển thị trên màn hình xem trước",
      "Đo nhiệt độ CPU của máy chủ",
      "Xóa sạch toàn bộ video trong máy tính",
      "Tự động dịch lời thoại sang tiếng Pháp"
    ],
    "answer": 0,
    "explain": "Playhead (vạch thời gian) đánh dấu vị trí thời gian hiện tại; khung hình tại vị trí vạch này sẽ hiện trên cửa sổ Preview."
  },
  {
    "id": "b29-03",
    "q": "Trong phần mềm dựng phim, các rãnh (Tracks) trên Timeline thường được chia thành 2 loại cơ bản nào?",
    "options": [
      "Video Tracks (chứa hình ảnh, video, chữ) và Audio Tracks (chứa âm thanh, nhạc nền, giọng nói)",
      "Text Tracks và Mouse Tracks",
      "Internal Tracks và External Tracks",
      "Color Tracks và Black Tracks"
    ],
    "answer": 0,
    "explain": "Timeline luôn phân tách thành Video Track (xử lý hình ảnh) và Audio Track (xử lý âm thanh)."
  },
  {
    "id": "b29-04",
    "q": "Khu vực Media Bin (hoặc Project Files / Import Media) trong phần mềm dựng phim có chức năng gì?",
    "options": [
      "Quản lý và lưu trữ danh mục các tệp tư liệu gốc (video, ảnh, nhạc) được đưa vào dự án",
      "Chứa các tệp rác bị người dùng xóa đi",
      "Tự động tải video lên trang mạng xã hội",
      "Lưu trữ mật khẩu đăng nhập của người dùng"
    ],
    "answer": 0,
    "explain": "Media Bin là thư viện tư liệu của dự án, nơi tập kết mọi video clip, ảnh tĩnh và file âm thanh trước khi kéo xuống Timeline."
  },
  {
    "id": "b29-05",
    "q": "Tệp dự án phim (Project file) lưu lại những thông tin gì?",
    "options": [
      "Đường dẫn đến các tệp tư liệu gốc, vị trí cắt ghép, các hiệu ứng và thiết lập trên Timeline (chứ không chứa trực tiếp file video nặng bên trong)",
      "Một file video duy nhất đã được đóng gói hoàn chỉnh",
      "Toàn bộ hệ điều hành máy tính",
      "Mã nguồn của phần mềm dựng phim"
    ],
    "answer": 0,
    "explain": "File dự án chỉ lưu kịch bản chỉ dẫn (cắt ở giây nào, hiệu ứng gì, đường dẫn file ở đâu), dung lượng rất nhẹ chỉ vài Megabyte."
  },
  {
    "id": "b29-06",
    "q": "Hiện tượng 'Media Offline' (mất kết nối tư liệu) xảy ra khi nào?",
    "options": [
      "Khi tệp video gốc bị xóa, đổi tên hoặc di chuyển sang thư mục khác khiến phần mềm không tìm thấy theo đường dẫn đã lưu",
      "Khi máy tính bị mất kết nối Internet",
      "Khi người dùng chưa cắm tai nghe",
      "Khi màn hình bị tắt"
    ],
    "answer": 0,
    "explain": "Vì tệp dự án chỉ lưu đường dẫn tệp, nếu tệp gốc bị đổi tên/xóa/chuyển vị trí thì phần mềm sẽ báo lỗi Media Offline."
  },
  {
    "id": "b29-07",
    "q": "Tỉ lệ khung hình (Aspect Ratio) chuẩn 16:9 thường được sử dụng cho nền tảng hoặc thiết bị nào?",
    "options": [
      "Màn hình máy tính, Tivi độ nét cao và video ngang trên YouTube",
      "Video dọc TikTok và Shorts",
      "Ảnh đại diện vuông Instagram",
      "Màn hình đồng hồ thông minh"
    ],
    "answer": 0,
    "explain": "16:9 (chiều ngang 16 phần, chiều cao 9 phần) là tỉ lệ màn hình chuẩn truyền hình và video ngang YouTube."
  },
  {
    "id": "b29-08",
    "q": "Tỉ lệ khung hình nào sau đây là chuẩn cho video định dạng dọc (Vertical Video) trên TikTok, YouTube Shorts và Facebook Reels?",
    "options": [
      "9:16",
      "16:9",
      "4:3",
      "21:9"
    ],
    "answer": 0,
    "explain": "9:16 là tỉ lệ khung hình dọc tối ưu cho màn hình điện thoại cầm thẳng đứng."
  },
  {
    "id": "b29-09",
    "q": "Độ phân giải Full HD có số điểm ảnh theo chiều ngang và chiều dọc lần lượt là bao nhiêu?",
    "options": [
      "1920 x 1080 pixel",
      "1280 x 720 pixel",
      "3840 x 2160 pixel",
      "640 x 480 pixel"
    ],
    "answer": 0,
    "explain": "Full HD (1080p) chuẩn quốc tế có kích thước 1920 pixel chiều rộng và 1080 pixel chiều cao."
  },
  {
    "id": "b29-10",
    "q": "Độ phân giải 4K (Ultra HD) có số lượng điểm ảnh gấp khoảng bao nhiêu lần so với độ phân giải Full HD (1080p)?",
    "options": [
      "Gấp 4 lần",
      "Gấp 2 lần",
      "Gấp 10 lần",
      "Bằng nhau"
    ],
    "answer": 0,
    "explain": "4K (3840x2160) có chiều rộng gấp đôi và chiều cao gấp đôi Full HD (1920x1080), do đó tổng số điểm ảnh gấp 4 lần (khoảng 8.3 triệu pixel)."
  },
  {
    "id": "b29-11",
    "q": "Thông số FPS (Frames Per Second) trong video đại diện cho đại lượng nào?",
    "options": [
      "Số lượng khung hình hiển thị trong một giây",
      "Dung lượng tệp tính bằng Megabyte",
      "Tốc độ gõ phím của người làm phim",
      "Âm lượng của bài hát"
    ],
    "answer": 0,
    "explain": "FPS là số khung hình trên giây; FPS càng cao thì chuyển động thị giác càng mượt mà."
  },
  {
    "id": "b29-12",
    "q": "Tốc độ khung hình 24 fps là tốc độ tiêu chuẩn được sử dụng rộng rãi trong lĩnh vực nào?",
    "options": [
      "Điện ảnh chiếu rạp truyền thống",
      "Truyền hình thể thao trực tiếp",
      "Trò chơi điện tử đua xe",
      "Hội nghị truyền hình trực tuyến"
    ],
    "answer": 0,
    "explain": "24 khung hình/giây là chuẩn mực kinh điển của phim điện ảnh thế giới, tạo cảm giác mờ chuyển động (motion blur) điện ảnh tự nhiên."
  },
  {
    "id": "b29-13",
    "q": "Để ghi lại các pha chuyển động siêu nhanh trong thể thao hoặc trò chơi điện tử để tạo hiệu ứng quay chậm (Slow Motion) mượt mà, người ta thường quay ở tốc độ FPS nào?",
    "options": [
      "60 fps hoặc 120 fps trở lên",
      "12 fps",
      "5 fps",
      "1 fps"
    ],
    "answer": 0,
    "explain": "Quay ở 60fps hoặc 120fps lưu giữ nhiều khung hình hơn, khi giảm tốc độ phát lại video vẫn giữ được độ mượt, không bị giật khựng."
  },
  {
    "id": "b29-14",
    "q": "Định dạng vùng chứa (Container format) và chuẩn nén video phổ biến, tương thích tốt nhất hiện nay trên mọi thiết bị và nền tảng web là:",
    "options": [
      "MP4 (sử dụng chuẩn nén H.264 và âm thanh AAC)",
      "AVI không nén",
      "FLV",
      "WMV"
    ],
    "answer": 0,
    "explain": "MP4 (H.264/AAC) là tiêu chuẩn vàng toàn cầu về độ tương thích và tối ưu hóa dung lượng truyền tải qua mạng."
  },
  {
    "id": "b29-15",
    "q": "Khi xếp 2 clip hình ảnh đè lên nhau trên 2 Video Track khác nhau (Track 1 ở dưới, Track 2 ở trên), trên màn hình Preview người xem sẽ nhìn thấy gì?",
    "options": [
      "Nhìn thấy hình ảnh của Track 2 (ở trên) che khuất hình ảnh của Track 1 (ở dưới), trừ khi Track 2 bị giảm kích thước hoặc trong suốt",
      "Chỉ nhìn thấy hình ảnh của Track 1",
      "Hai hình ảnh tự động biến mất",
      "Màn hình chỉ hiện màu đen"
    ],
    "answer": 0,
    "explain": "Nguyên tắc lớp hình ảnh: Track nằm phía trên sẽ che lấp nội dung của Track nằm phía dưới trên Timeline."
  },
  {
    "id": "b29-16",
    "q": "Màn hình xem trước (Preview Monitor) cung cấp các nút điều khiển cơ bản nào sau đây?",
    "options": [
      "Phát (Play), Tạm dừng (Pause), Tua về đầu (Jump to start), Tua từng khung hình (Step forward/backward)",
      "In ra giấy và Đóng dấu đỏ",
      "Kết nối Bluetooth và Cắm tai nghe",
      "Tắt nguồn máy chủ"
    ],
    "answer": 0,
    "explain": "Preview Monitor cung cấp bộ điều khiển phát lại video hoàn chỉnh để kiểm tra nhịp điệu cắt ghép."
  },
  {
    "id": "b29-17",
    "q": "Để đưa một đoạn video từ thư viện Media Bin xuống dòng thời gian Timeline, thao tác thông dụng và trực quan nhất là:",
    "options": [
      "Kéo thả (Drag and drop) tệp video đó từ Media Bin thả vào một rãnh (Track) trên Timeline",
      "Nhấn phím F12",
      "Gõ tên tệp vào cửa sổ Run của Windows",
      "Tắt phần mềm rồi khởi động lại"
    ],
    "answer": 0,
    "explain": "Kéo thả trực tiếp bằng chuột là thao tác cơ bản nhất để đưa tư liệu vào dòng thời gian dựng phim."
  },
  {
    "id": "b29-18",
    "q": "Phần mềm làm phim mã nguồn mở miễn phí, hỗ trợ đa nền tảng nào sau đây thường được giới thiệu trong chương trình giáo dục phổ thông?",
    "options": [
      "Shotcut hoặc OpenShot (hoặc ứng dụng Clipchamp tích hợp sẵn trên Windows 11)",
      "AutoCAD",
      "Microsoft Excel",
      "HeidiSQL"
    ],
    "answer": 0,
    "explain": "Shotcut, OpenShot và Microsoft Clipchamp là các phần mềm dựng video trực quan, miễn phí rất phù hợp cho học sinh phổ thông."
  },
  {
    "id": "b29-19",
    "q": "Thông số 'Bitrate' (Tốc độ truyền dữ liệu) của video xuất ra quyết định yếu tố nào?",
    "options": [
      "Lượng dữ liệu được xử lý trong một giây; Bitrate càng cao thì chất lượng hình ảnh càng sắc nét và dung lượng tệp càng nặng",
      "Tốc độ quay của cánh quạt tản nhiệt",
      "Chiều dài của dây cáp màn hình",
      "Số lượng diễn viên xuất hiện trong phim"
    ],
    "answer": 0,
    "explain": "Bitrate (tính bằng Mbps) đo lưu lượng dữ liệu mỗi giây, quyết định trực tiếp độ nén và độ trong của hình ảnh."
  },
  {
    "id": "b29-20",
    "q": "Khi muốn tạo một video kỷ yếu lớp học phát trên máy chiếu hội trường, thiết lập tỉ lệ khung hình và độ phân giải tối ưu nhất là:",
    "options": [
      "Tỉ lệ 16:9, độ phân giải Full HD (1920x1080) hoặc 4K, 30-60 fps",
      "Tỉ lệ 9:16, độ phân giải 480x360",
      "Tỉ lệ 1:1, độ phân giải 240p",
      "Tỉ lệ 4:3, chất lượng đen trắng"
    ],
    "answer": 0,
    "explain": "Máy chiếu hội trường và màn hình sân khấu luôn sử dụng chuẩn 16:9 Full HD trở lên để hình ảnh hiển thị trọn vẹn không bị méo."
  },
  {
    "id": "b29-21",
    "q": "Âm thanh trong rãnh Audio Track có dạng sóng âm (Waveform) giúp biên tập viên làm được điều gì thuận tiện nhất?",
    "options": [
      "Nhìn thấy trực quan các đoạn có tiếng nói, tiếng động to nhỏ hoặc khoảng lặng để cắt ghép chính xác theo nhịp âm thanh",
      "Đổi màu sắc của video",
      "Tự động vẽ tranh hoạt hình",
      "Tăng tốc độ kết nối mạng"
    ],
    "answer": 0,
    "explain": "Biểu đồ sóng âm (Waveform) thể hiện độ to nhỏ của âm thanh theo thời gian, giúp xác định chính xác điểm bắt đầu/kết thúc của câu nói."
  },
  {
    "id": "b29-22",
    "q": "Nút biểu tượng hình 'Chiếc loa' hoặc chữ 'Mute' ở đầu mỗi Audio Track có tác dụng gì?",
    "options": [
      "Tắt tiếng (tạm thời tắt âm thanh) của toàn bộ rãnh âm thanh đó khi phát thử",
      "Tăng âm lượng lên mức nguy hiểm",
      "Xóa vĩnh viễn tệp nhạc khỏi máy tính",
      "Tự động hát theo lời bài hát"
    ],
    "answer": 0,
    "explain": "Nút Mute giúp tắt tiếng của track tương ứng để người dựng phim dễ dàng nghe riêng từng track khác (Solo)."
  },
  {
    "id": "b29-23",
    "q": "Nút biểu tượng 'Khóa' (Lock Track) ở đầu mỗi rãnh trên Timeline dùng để làm gì?",
    "options": [
      "Khóa rãnh lại để bảo vệ các đoạn clip đã biên tập, không cho phép di chuyển, cắt hoặc xóa nhầm ngoài ý muốn",
      "Đặt mật khẩu cho người xem phim",
      "Khóa màn hình máy tính",
      "Tự động lưu dự án lên đám mây"
    ],
    "answer": 0,
    "explain": "Lock Track cố định toàn bộ nội dung trên track đó, ngăn chặn mọi thao tác vô ý làm xô lệch vị trí."
  },
  {
    "id": "b29-24",
    "q": "Thao tác phóng to và thu nhỏ trục thời gian (Zoom in / Zoom out Timeline) giúp biên tập viên như thế nào?",
    "options": [
      "Phóng to giúp nhìn rõ từng khung hình mili-giây để cắt tỉa chi tiết; thu nhỏ giúp nhìn bao quát toàn bộ độ dài của cả bộ phim",
      "Làm cho bộ phim dài ra hoặc ngắn đi trong thực tế",
      "Làm thay đổi tốc độ quay của camera",
      "Tăng giảm kích thước khung hình video xuất ra"
    ],
    "answer": 0,
    "explain": "Zoom Timeline chỉ thay đổi mức độ hiển thị tỷ lệ trên màn hình dựng: phóng to để cắt tỉa siêu chính xác, thu nhỏ để xem tổng thể."
  }
];
