import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "b1-01",
    q: "Phát biểu nào sau đây mô tả ĐÚNG NHẤT về Hệ điều hành (Operating System)?",
    options: [
      "Là phần mềm hệ thống quản lý tài nguyên phần cứng, phần mềm và cung cấp nền tảng để các chương trình ứng dụng hoạt động",
      "Là tập hợp các phần cứng gồm CPU, RAM và ổ cứng để máy tính có thể khởi động",
      "Là phần mềm ứng dụng dùng để soạn thảo văn bản và trình chiếu",
      "Là chương trình duy nhất chạy trên máy tính, kiểm soát toàn bộ hoạt động của người dùng"
    ],
    answer: 0,
    explain: "Hệ điều hành (OS) là phần mềm hệ thống quản lý tài nguyên phần cứng, phần mềm và cung cấp nền tảng để các chương trình ứng dụng hoạt động. Nó đóng vai trò trung gian giữa người dùng và phần cứng máy tính.",
  },
  {
    id: "b1-02",
    q: "Theo SGK Tin học 11 (Kết nối tri thức), hệ điều hành có bao nhiêu nhóm chức năng chính?",
    options: [
      "5 nhóm chức năng",
      "3 nhóm chức năng",
      "4 nhóm chức năng",
      "6 nhóm chức năng"
    ],
    answer: 0,
    explain: "Hệ điều hành có 5 nhóm chức năng chính: (1) Quản lý thiết bị, (2) Quản lý lưu trữ dữ liệu, (3) Tổ chức thực hiện chương trình, (4) Cung cấp giao diện người dùng, (5) Cung cấp tiện ích.",
  },
  {
    id: "b1-03",
    q: "Chức năng nào của hệ điều hành cho phép nhiều chương trình cùng chạy đồng thời (multitasking)?",
    options: [
      "Tổ chức thực hiện chương trình",
      "Quản lý thiết bị",
      "Cung cấp giao diện người dùng",
      "Quản lý lưu trữ dữ liệu"
    ],
    answer: 0,
    explain: "Chức năng 'Tổ chức thực hiện chương trình' của hệ điều hành có nhiệm vụ điều phối tài nguyên cho các tiến trình xử lý, tạo môi trường để chạy các ứng dụng, bao gồm cả cơ chế đa nhiệm (multitasking).",
  },
  {
    id: "b1-04",
    q: "Phần mềm nào sau đây là ví dụ tiêu biểu về 'tiện ích' mà hệ điều hành cung cấp?",
    options: [
      "Công cụ định dạng đĩa, nén tệp, kiểm tra lỗi đĩa và cấu hình mạng",
      "Microsoft Word, Excel, PowerPoint",
      "Trình duyệt web Chrome, Firefox",
      "Phần mềm đồ họa Photoshop, CorelDraw"
    ],
    answer: 0,
    explain: "Tiện ích hệ thống là các công cụ hỗ trợ nâng cao hiệu quả sử dụng máy tính do hệ điều hành cung cấp, ví dụ: định dạng đĩa, nén tệp, kiểm tra lỗi đĩa, cấu hình mạng... Còn Word, Chrome, Photoshop là phần mềm ứng dụng.",
  },
  {
    id: "b1-05",
    q: "Hệ điều hành Windows phiên bản nào được coi là bước nhảy vọt lớn, lần đầu tiên giới thiệu giao diện đồ họa GUI hoàn thiện và được đông đảo người dùng đón nhận?",
    options: [
      "Windows 95 (năm 1995)",
      "Windows 1 (năm 1985)",
      "Windows XP (năm 2001)",
      "Windows 10 (năm 2015)"
    ],
    answer: 0,
    explain: "Windows 95 (ra mắt năm 1995) được coi là bước nhảy vọt lớn trong lịch sử Windows, với giao diện đồ họa GUI hoàn thiện, menu Start, taskbar và hỗ trợ Plug & Play. Windows 1 (1985) là phiên bản đầu tiên, còn Windows 3 (1990) mới bắt đầu có đa nhiệm.",
  },
  {
    id: "b1-06",
    q: "Hệ điều hành Linux có nguồn gốc từ hệ điều hành nào và được phát triển từ năm nào?",
    options: [
      "Từ hệ điều hành UNIX, phát triển từ năm 1969",
      "Từ hệ điều hành Windows, phát triển từ năm 1985",
      "Từ hệ điều hành macOS, phát triển từ năm 1984",
      "Từ hệ điều hành DOS, phát triển từ năm 1981"
    ],
    answer: 0,
    explain: "Linux có nguồn gốc từ hệ điều hành UNIX (phát triển từ năm 1969 — là hệ điều hành đa nhiệm, đa người dùng). Phần nhân Linux 1.0 được Linus Torvalds công bố năm 1994 dưới dạng mã nguồn mở.",
  },
  {
    id: "b1-07",
    q: "Đặc điểm nào sau đây là ĐÚNG khi nói về hệ điều hành Linux?",
    options: [
      "Là hệ điều hành mã nguồn mở, miễn phí và là nền tảng cho hệ điều hành Android",
      "Là hệ điều hành độc quyền của Microsoft, chỉ dành cho máy tính cá nhân",
      "Là hệ điều hành chỉ dành riêng cho điện thoại thông minh",
      "Là hệ điều hành không có giao diện đồ họa, chỉ dùng dòng lệnh"
    ],
    answer: 0,
    explain: "Linux là hệ điều hành mã nguồn mở (open source), miễn phí. Các biến thể phổ biến gồm RedHat (1994), SuSE (1996), Ubuntu (2004). Đặc biệt, hệ điều hành Android trên điện thoại di động được xây dựng trên lõi (kernel) của Linux.",
  },
  {
    id: "b1-08",
    q: "Điểm khác biệt quan trọng nhất giữa hệ điều hành Android và iOS là gì?",
    options: [
      "Android là mã nguồn mở (Google), iOS là mã nguồn đóng chỉ dành cho thiết bị Apple",
      "Android chỉ dùng cho máy tính bảng, còn iOS chỉ dùng cho điện thoại",
      "Android không thể kết nối Wi-Fi, còn iOS thì có thể",
      "Android không có kho ứng dụng, còn iOS có App Store"
    ],
    answer: 0,
    explain: "Android (Google) là hệ điều hành mã nguồn mở dựa trên Linux, chạy trên đa dạng thiết bị của nhiều hãng. iOS (Apple) là mã nguồn đóng, chỉ chạy trên các thiết bị Apple (iPhone, iPad). Đây là sự khác biệt cơ bản nhất.",
  },
  {
    id: "b1-09",
    q: "Hệ điều hành cho thiết bị di động đặc biệt chú trọng vào yếu tố nào mà hệ điều hành máy tính để bàn ít cần hơn?",
    options: [
      "Kết nối mạng không dây (Wi-Fi, 4G/5G, Bluetooth, NFC) và tối ưu pin",
      "Khả năng chạy được nhiều phần mềm văn phòng cùng lúc",
      "Hỗ trợ màn hình độ phân giải 4K và card đồ họa rời",
      "Dung lượng ổ cứng lớn và tốc độ CPU cao"
    ],
    answer: 0,
    explain: "Do đặc thù cần tính di động, HĐH cho thiết bị di động tập trung đặc biệt vào: kết nối mạng không dây (Wi-Fi, 4G/5G, Bluetooth, NFC), tối ưu tiêu thụ pin, giao diện cảm ứng thân thiện, GPS, máy ảnh và nhận dạng tiếng nói.",
  },
  {
    id: "b1-10",
    q: "Trong mô hình phân tầng của hệ thống máy tính theo SGK, Hệ điều hành đóng vai trò là lớp trung gian giữa hai thành phần nào?",
    options: [
      "Giữa Phần mềm ứng dụng và Phần cứng",
      "Giữa Người dùng và Phần mềm ứng dụng",
      "Giữa CPU và RAM",
      "Giữa Bàn phím và Màn hình"
    ],
    answer: 0,
    explain: "Hệ điều hành đóng vai trò trung gian giữa Phần mềm ứng dụng và Phần cứng. Chuỗi quan hệ là: Người dùng → Phần mềm ứng dụng → Hệ điều hành → Phần cứng. Phần mềm ứng dụng yêu cầu tài nguyên thông qua hệ điều hành, hệ điều hành điều phối và điều khiển phần cứng.",
  },
];

