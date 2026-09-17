import { Question } from "@/lib/types";

// Bài 30: Biên tập phim
export const questions: Question[] = [
  {
    "id": "b30-01",
    "q": "Kỹ thuật cắt tỉa (Trim) trong biên tập video có tác dụng gì?",
    "options": [
      "Kéo co ngắn hoặc giãn dài hai đầu mút (đầu và đuôi) của một clip để bỏ bớt các giây thừa lúc bấm máy và dừng máy",
      "Đổi màu toàn bộ video sang màu xanh",
      "Tăng gấp 10 lần âm lượng",
      "Tự động viết lời bài hát"
    ],
    "answer": 0,
    "explain": "Trim là thao tác kéo chỉnh điểm đầu (In point) và điểm cuối (Out point) của clip trên Timeline để loại bỏ đoạn thừa."
  },
  {
    "id": "b30-02",
    "q": "Thao tác Chia cắt clip (Split / Cut - thường dùng phím tắt S hoặc Ctrl + K) có tác dụng gì?",
    "options": [
      "Cắt một đoạn clip thành hai đoạn độc lập tại đúng vị trí của đầu đọc thời gian Playhead",
      "Xóa sạch toàn bộ video khỏi máy tính",
      "Nhân đôi thời lượng của bộ phim",
      "Tắt nguồn phần mềm"
    ],
    "answer": 0,
    "explain": "Split (phím S) tách clip thành 2 phần độc lập ngay tại vị trí Playhead để người dùng có thể xóa đoạn hỏng ở giữa hoặc chèn hiệu ứng."
  },
  {
    "id": "b30-03",
    "q": "Thao tác 'Ripple Delete' khác với thao tác xóa (Delete) thông thường trên Timeline ở điểm nào?",
    "options": [
      "Ripple Delete vừa xóa đoạn clip thừa vừa tự động co dồn toàn bộ các đoạn clip phía sau lại để không để lại khoảng trống màu đen trên Timeline",
      "Ripple Delete làm hỏng file gốc",
      "Ripple Delete chỉ xóa được âm thanh mà giữ lại hình ảnh",
      "Ripple Delete chỉ chạy được khi có kết nối Internet"
    ],
    "answer": 0,
    "explain": "Ripple Delete xóa đoạn chọn và tự động hút lấp khoảng trống (gap), giúp timeline liền mạch không bị hở khe đen."
  },
  {
    "id": "b30-04",
    "q": "Hiệu ứng chuyển cảnh (Video Transitions) được đặt ở vị trí nào trên dòng thời gian Timeline?",
    "options": [
      "Tại điểm giao tiếp tiếp giáp giữa hai đoạn clip nằm liền kề nhau trên cùng một Track",
      "Ở chính giữa một bài hát đơn lẻ",
      "Ở ngoài màn hình máy tính",
      "Chỉ đặt được ở rãnh Audio Track"
    ],
    "answer": 0,
    "explain": "Hiệu ứng chuyển cảnh (Transitions) nối hai cảnh quay lại với nhau tại điểm giao nhau giữa 2 clip."
  },
  {
    "id": "b30-05",
    "q": "Hiệu ứng chuyển cảnh kinh điển 'Dissolve' (hoặc Cross Dissolve) hoạt động như thế nào?",
    "options": [
      "Cảnh trước mờ dần đi đồng thời cảnh sau hiện rõ dần lên hòa quyện mượt mà vào nhau",
      "Màn hình nhấp nháy đèn flash liên tục",
      "Khung hình bị lật tung như tờ giấy",
      "Hình ảnh vỡ vụn thành các mảnh kính"
    ],
    "answer": 0,
    "explain": "Dissolve làm mờ dần cảnh trước đan xen với sự hiện rõ của cảnh sau, tạo chuyển giao không gian/thời gian êm dịu."
  },
  {
    "id": "b30-06",
    "q": "Nguyên tắc chuyên nghiệp nào sau đây cần ghi nhớ khi sử dụng các hiệu ứng chuyển cảnh (Transitions)?",
    "options": [
      "Chỉ nên sử dụng chuyển cảnh có chọn lọc, thời lượng ngắn (0.5s - 1s) phục vụ câu chuyện; tránh lạm dụng quá nhiều hiệu ứng lòe loẹt làm đứt gãy cảm xúc người xem",
      "Mỗi giây phải chèn một hiệu ứng xoay 3D khác nhau",
      "Càng dùng nhiều hiệu ứng chuyển cảnh phức tạp thì phim càng hay",
      "Chỉ được dùng chuyển cảnh khi trời mưa"
    ],
    "answer": 0,
    "explain": "Lạm dụng hiệu ứng chuyển cảnh lòe loẹt gây rối mắt và làm giảm chất lượng nghệ thuật của video."
  },
  {
    "id": "b30-07",
    "q": "Hiệu ứng 'Fade in' và 'Fade out' đối với âm thanh có tác dụng gì?",
    "options": [
      "Làm cho âm lượng to dần lên từ từ lúc bắt đầu (Fade in) và nhỏ dần dần trước khi tắt hẳn lúc kết thúc (Fade out)",
      "Làm cho giọng nói đổi thành giọng robot",
      "Tăng tốc độ bài hát lên gấp 3 lần",
      "Loại bỏ hoàn toàn tiếng đàn piano"
    ],
    "answer": 0,
    "explain": "Fade in/out làm âm thanh vào và ra êm dịu, tránh hiện tượng âm thanh nổ lộp bộp hoặc giật mình ngắt cụt đột ngột."
  },
  {
    "id": "b30-08",
    "q": "Tính năng cân bằng âm lượng tự động 'Audio Ducking' giải quyết vấn đề gì trong phim có thuyết minh?",
    "options": [
      "Tự động giảm nhỏ âm lượng của nhạc nền (BGM) mỗi khi nhân vật cất tiếng nói hoặc thuyết minh, và tự động tăng nhạc nền lại khi lời thoại kết thúc",
      "Lọc bỏ hoàn toàn hình ảnh của video",
      "Tự động tăng gấp đôi tốc độ phát video",
      "Đổi ngôn ngữ thuyết minh sang tiếng Hàn"
    ],
    "answer": 0,
    "explain": "Ducking tự động dìm nhạc nền xuống nền dưới khi có tiếng nói để khán giả nghe rõ lời thoại."
  },
  {
    "id": "b30-09",
    "q": "Khái niệm 'Lower Third' trong truyền hình và làm phim là gì?",
    "options": [
      "Đoạn đồ họa chữ hiển thị ở 1/3 góc dưới màn hình dùng để giới thiệu họ tên, chức danh của nhân vật đang phát biểu",
      "Phần ba thời lượng cuối cùng của bộ phim",
      "Nút bấm chuyển kênh trên tivi",
      "Góc tối phía sau ống kính camera"
    ],
    "answer": 0,
    "explain": "Lower Third là thanh đồ họa chữ đặt ở 1/3 đáy màn hình để chú thích tên, nghề nghiệp người xuất hiện."
  },
  {
    "id": "b30-10",
    "q": "Đoạn chữ chạy ở cuối phim (Credits / Outro) thường cung cấp những thông tin gì?",
    "options": [
      "Danh sách các thành viên thực hiện dự án (đạo diễn, quay phim, biên tập, diễn viên) và lời cảm ơn, nguồn tư liệu",
      "Dự báo thời tiết ngày mai",
      "Bảng giá các sản phẩm đang khuyến mãi",
      "Mã nguồn phần mềm máy tính"
    ],
    "answer": 0,
    "explain": "Credits liệt kê tên tuổi ê-kíp sản xuất, diễn viên và bản quyền âm nhạc để tri ân đóng góp."
  },
  {
    "id": "b30-11",
    "q": "Khi làm phụ đề (Subtitles / Captions) cho video, nguyên tắc thị giác nào sau đây là quan trọng nhất?",
    "options": [
      "Font chữ đơn giản, dễ đọc, kích thước vừa phải, đặt ở vị trí cố định dưới đáy màn hình và có viền hoặc bóng đen để tương phản tốt trên mọi phông nền",
      "Font chữ uốn lượn phong cách thư pháp cổ",
      "Đặt chữ phụ đề ở chính giữa che khuất mặt nhân vật",
      "Dùng chữ màu vàng nhạt không viền trên nền áo trắng"
    ],
    "answer": 0,
    "explain": "Phụ đề chuẩn: Font chữ không chân (Sans-serif) rõ ràng, có viền tối/bóng đổ, đặt sát đáy màn hình để không che hành động chính."
  },
  {
    "id": "b30-12",
    "q": "Để tạo hiệu ứng tua nhanh thời gian (Timelapse / Fast Motion) cho một cảnh hoa nở hoặc hoàng hôn buông xuống, ta điều chỉnh thông số nào?",
    "options": [
      "Tăng thông số Tốc độ (Speed) của clip lên mức 200%, 500% hoặc 1000%",
      "Giảm tốc độ xuống còn 20%",
      "Đổi màu video sang đen trắng",
      "Tắt màn hình máy tính"
    ],
    "answer": 0,
    "explain": "Tăng Speed (tốc độ phát) sẽ nén thời gian hàng tiếng đồng hồ thành vài giây tua nhanh ấn tượng."
  },
  {
    "id": "b30-13",
    "q": "Khi sử dụng nhạc nền (BGM) cho video đăng tải lên YouTube, việc sử dụng các bài hát nổi tiếng có bản quyền thương mại mà chưa được phép sẽ dẫn đến hậu quả gì?",
    "options": [
      "Video bị tắt tiếng (Mute), bị đánh gậy bản quyền (Copyright strike), hoặc bị chặn hiển thị trên toàn cầu",
      "Video tự động lên top thịnh hành",
      "Kênh được thưởng nút vàng YouTube",
      "Máy tính bị hỏng ổ đĩa cứng"
    ],
    "answer": 0,
    "explain": "Hệ thống Content ID của YouTube sẽ tự động quét và áp dụng biện pháp phạt bản quyền nếu vi phạm bản quyền âm nhạc."
  },
  {
    "id": "b30-14",
    "q": "Nguồn nhạc nào sau đây là an toàn và hợp pháp nhất để học sinh sử dụng làm nhạc nền cho video bài tập phóng sự?",
    "options": [
      "Thư viện âm thanh miễn phí YouTube Audio Library hoặc các bản nhạc được cấp phép Creative Commons / No Copyright",
      "Tải lậu các bài hát độc quyền từ trang web có trả phí",
      "Ghi âm trộm qua micro từ đài phát thanh",
      "Chép đĩa CD ca nhạc mua ở chợ"
    ],
    "answer": 0,
    "explain": "YouTube Audio Library cung cấp kho nhạc miễn phí tác quyền hoàn toàn hợp pháp cho các nhà sáng tạo nội dung."
  },
  {
    "id": "b30-15",
    "q": "Thao tác 'Xuất bản phim' (Export / Render Video) trong phần mềm dựng phim là quá trình gì?",
    "options": [
      "Phần mềm tính toán, hòa trộn toàn bộ hình ảnh, âm thanh, hiệu ứng, chữ trên Timeline và đóng gói thành một tệp video duy nhất (.mp4)",
      "Tải video trực tiếp từ máy ảnh về máy tính",
      "In kịch bản ra giấy A4",
      "Xóa bỏ các tệp tin trong thùng rác"
    ],
    "answer": 0,
    "explain": "Render/Export là quá trình biên dịch và đóng gói toàn bộ dự án thành file video hoàn chỉnh."
  },
  {
    "id": "b30-16",
    "q": "Kỹ thuật 'Cắt chèn B-roll' (B-roll footage) trong phóng sự video có ý nghĩa gì?",
    "options": [
      "Chèn các hình ảnh tư liệu, phong cảnh hoặc hoạt động thực tế đè lên lời nói của nhân vật (A-roll) để minh họa cho điều nhân vật đang kể",
      "Xóa bỏ hoàn toàn âm thanh của nhân vật",
      "Quay video bằng camera phụ bị hỏng",
      "Tua ngược đoạn video về điểm xuất phát"
    ],
    "answer": 0,
    "explain": "B-roll là cảnh quay phụ trợ minh họa trực quan sinh động giúp phóng sự không bị nhàm chán khi nhân vật nói dài."
  },
  {
    "id": "b30-17",
    "q": "Để ghép một bức ảnh logo của trường vào góc trên bên phải của toàn bộ video, ta cần làm gì?",
    "options": [
      "Đặt ảnh logo ở một Video Track phía trên các video clip và kéo dài thời lượng của ảnh logo bằng đúng độ dài bộ phim",
      "Dán băng dính một tấm ảnh giấy lên góc màn hình máy tính",
      "Chèn logo vào giữa bài hát ở Audio Track",
      "Không thể làm được việc này trên máy tính"
    ],
    "answer": 0,
    "explain": "Đặt ảnh logo ở Video Track trên cùng và kéo dài dải clip bằng cả timeline sẽ giúp logo luôn hiển thị trên góc."
  },
  {
    "id": "b30-18",
    "q": "Khi điều chỉnh âm lượng (Volume) của video, mức âm lượng thoại chuẩn không bị méo tiếng (Clipping/Distortion) thường nằm trong khoảng nào trên thước đo dB?",
    "options": [
      "Từ -12 dB đến -6 dB (khu vực màu xanh lá đến vàng, không vượt quá 0 dB chạm vạch đỏ)",
      "Luôn luôn vượt trên +12 dB",
      "Ở mức -60 dB (gần như im lặng)",
      "Mức nào cũng giống nhau"
    ],
    "answer": 0,
    "explain": "Mức âm lượng chuẩn nằm ở khoảng -12dB đến -6dB; nếu vượt quá 0dB (vạch đỏ) âm thanh sẽ bị rè, vỡ và méo tiếng nghiêm trọng."
  },
  {
    "id": "b30-19",
    "q": "Hiệu ứng chuyển cảnh 'Fade to Black' (mờ dần vào bóng tối) thường được sử dụng trong ngữ cảnh nào của bộ phim?",
    "options": [
      "Khi kết thúc một phân đoạn lớn, kết thúc một ngày hoặc báo hiệu câu chuyện bước sang một chương mới / kết thúc phim",
      "Mỗi khi nhân vật chớp mắt",
      "Khi nhân vật bắt đầu nói câu thứ hai",
      "Giữa hai từ trong một câu nói"
    ],
    "answer": 0,
    "explain": "Fade to Black mang tính ngưng đọng thời gian, tạo khoảng lặng sâu lắng báo hiệu chuyển màn hoặc kết thúc hồi kịch."
  },
  {
    "id": "b30-20",
    "q": "Khi cắt bỏ một đoạn bị nói vấp của MC trong video, nếu nối thẳng 2 đoạn lại mà không có hình ảnh B-roll chèn đè, hiện tượng gì sẽ xảy ra?",
    "options": [
      "Hiện tượng 'Jump Cut' khiến vị trí đầu và cử chỉ của MC bị giật cục đột ngột trên khung hình",
      "Âm thanh tự động chuyển sang tiếng nước ngoài",
      "Video tự động tua ngược về đầu",
      "Màn hình bị biến thành hình tròn"
    ],
    "answer": 0,
    "explain": "Jump Cut là lỗi giật hình khi cắt bỏ đoạn giữa của cùng một góc máy; cần chèn B-roll hoặc đổi cỡ cảnh để che vết cắt."
  },
  {
    "id": "b30-21",
    "q": "Lựa chọn 'Match Source' khi xuất video trong phần mềm dựng phim có ý nghĩa gì?",
    "options": [
      "Tự động thiết lập độ phân giải, tỉ lệ khung hình và FPS của file xuất ra trùng khớp với định dạng của video gốc",
      "Tự động tìm kiếm nguồn sạc pin máy tính",
      "Ghép hai bài hát lại với nhau",
      "Tải video lên Google Drive"
    ],
    "answer": 0,
    "explain": "Match Source giúp xuất file với các thông số tương đồng tối đa với tư liệu nguồn ban đầu."
  },
  {
    "id": "b30-22",
    "q": "Để tạo cảm giác kịch tính, dồn dập cho một phân đoạn hành động hoặc cuộc thi đấu thể thao, người dựng phim nên:",
    "options": [
      "Cắt các cảnh quay thật ngắn (1-2 giây mỗi cảnh) và chuyển cảnh nhanh theo nhịp điệu dồn dập của nhạc nền",
      "Để một góc quay duy nhất kéo dài 30 phút không cắt",
      "Tắt hoàn toàn âm thanh của video",
      "Làm cho video phát chậm lại 10 lần"
    ],
    "answer": 0,
    "explain": "Tiết tấu dựng nhanh (Fast-paced editing) với các shot quay ngắn tạo cảm giác nghẹt thở, hưng phấn và kịch tính."
  },
  {
    "id": "b30-23",
    "q": "Phím tắt thông dụng nhất để xem video ở chế độ toàn màn hình (Full Screen) trong hầu hết các trình biên tập video là:",
    "options": [
      "Phím dấu ngã (~) hoặc tổ hợp phím Ctrl + F / F11",
      "Phím Esc",
      "Phím Enter",
      "Phím Caps Lock"
    ],
    "answer": 0,
    "explain": "Phím `~` (nằm cạnh phím số 1) hoặc Ctrl+F thường dùng để phóng đại cửa sổ Preview ra toàn màn hình."
  },
  {
    "id": "b30-24",
    "q": "Sau khi render xuất bản video MP4 xong, bước kiểm tra chất lượng (Quality Control) cần thiết của biên tập viên là gì?",
    "options": [
      "Mở xem lại toàn bộ video từ đầu đến cuối trên trình phát đa phương tiện để kiểm tra hình ảnh, lỗi chính tả phụ đề và âm thanh",
      "Xóa ngay toàn bộ thư mục dự án và file gốc",
      "Gửi đi dự thi ngay mà không cần xem lại",
      "Tắt máy đi ngủ"
    ],
    "answer": 0,
    "explain": "Luôn luôn xem lại trọn vẹn sản phẩm cuối cùng để phát hiện các lỗi sót (lỗi render, sai chính tả, tiếng nổ, mất tiếng) trước khi bàn giao."
  }
];
