import { Question } from "@/lib/types";

export const questionsBai01: Question[] = [
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


    options: [
      "Là tập hợp các chương trình điều khiển và quản lí thiết bị phần cứng, cung cấp môi trường để các phần mềm ứng dụng hoạt động",
      "Là phần mềm chuyên dụng để soạn thảo văn bản, tính toán số liệu và thiết kế trình chiếu",
      "Là một thiết bị phần cứng gắn trên bo mạch chủ để xử lý thông tin",
      "Là một giao thức mạng cho phép kết nối các máy tính qua Internet"
    ],
    answer: 0,
    explain: "Hệ điều hành đóng vai trò là cầu nối giữa phần cứng máy tính và phần mềm ứng dụng, quản lý tài nguyên hệ thống và cung cấp môi trường giao tiếp cho người dùng.",
  },
  {
    id: "b1-02",
    q: "Nhóm chức năng nào dưới đây thuộc nhiệm vụ cơ bản của hệ điều hành?",
    options: [
      "Quản lí tệp và thư mục, quản lí thiết bị ngoại vi, quản lí bộ nhớ và CPU, cung cấp giao diện người dùng",
      "Dịch văn bản tự động, dựng video chuyên nghiệp, chỉnh sửa ảnh nghệ thuật",
      "Kiểm tra ngữ pháp tiếng Anh, tạo trang web bằng HTML/CSS",
      "Sản xuất linh kiện điện tử vi mạch bán dẫn"
    ],
    answer: 0,
    explain: "Hệ điều hành chịu trách nhiệm quản lí tài nguyên phần cứng (CPU, RAM, ổ đĩa, thiết bị ngoại vi) và quản lí thông tin (tệp, thư mục), đồng thời cung cấp giao diện người dùng.",
  },
  {
    id: "b1-03",
    q: "Giao diện nào sau đây cho phép người dùng ra lệnh cho máy tính thông qua việc gõ các dòng lệnh văn bản bằng bàn phím?",
    options: [
      "Giao diện dòng lệnh (CLI - Command Line Interface)",
      "Giao diện đồ họa người dùng (GUI - Graphical User Interface)",
      "Giao diện cảm ứng chạm (Touch Screen Interface)",
      "Giao diện điều khiển bằng giọng nói (Voice User Interface)"
    ],
    answer: 0,
    explain: "Giao diện dòng lệnh (CLI) xuất hiện trong các hệ điều hành thế hệ đầu như MS-DOS, người dùng tương tác bằng cách gõ lệnh từ bàn phím thay vì dùng chuột nhấp vào biểu tượng.",
  },
  {
    id: "b1-04",
    q: "Mối quan hệ phân tầng giữa Người dùng, Phần mềm ứng dụng, Hệ điều hành và Phần cứng được thể hiện theo trật tự nào sau đây?",
    options: [
      "Người dùng ➔ Phần mềm ứng dụng ➔ Hệ điều hành ➔ Phần cứng",
      "Người dùng ➔ Hệ điều hành ➔ Phần mềm ứng dụng ➔ Phần cứng",
      "Phần cứng ➔ Phần mềm ứng dụng ➔ Hệ điều hành ➔ Người dùng",
      "Người dùng ➔ Phần cứng ➔ Hệ điều hành ➔ Phần mềm ứng dụng"
    ],
    answer: 0,
    explain: "Người dùng thao tác trên phần mềm ứng dụng; ứng dụng gửi yêu cầu đến hệ điều hành; hệ điều hành trực tiếp điều khiển thiết bị phần cứng để thực thi.",
  },
  {
    id: "b1-05",
    q: "Đặc điểm nào sau đây KHÔNG PHẢI là đặc trưng nổi bật của hệ điều hành dành cho thiết bị di động (như Android, iOS)?",
    options: [
      "Yêu cầu người dùng phải gõ lệnh văn bản phức tạp mới có thể mở ứng dụng",
      "Tối ưu hóa khả năng tương tác chạm, vuốt trên màn hình cảm ứng",
      "Quản lý năng lượng nghiêm ngặt nhằm kéo dài thời lượng pin",
      "Tích hợp sẵn các kết nối không dây linh hoạt (Wi-Fi, 4G/5G, Bluetooth, GPS)"
    ],
    answer: 0,
    explain: "Hệ điều hành di động được thiết kế trực quan với màn hình cảm ứng đa điểm, người dùng chỉ cần chạm vuốt, hoàn toàn không bắt buộc phải dùng dòng lệnh.",
  },
  {
    id: "b1-06",
    q: "Hệ điều hành nào sau đây là hệ điều hành mã nguồn mở được sử dụng phổ biến trên máy chủ và là nền tảng cho Android?",
    options: [
      "Linux",
      "Microsoft Windows",
      "macOS",
      "iOS"
    ],
    answer: 0,
    explain: "Linux là hệ điều hành mã nguồn mở (Open Source) rất mạnh mẽ, linh hoạt và được dùng làm nhân tảng cho hệ điều hành di động Android.",
  },
  {
    id: "b1-07",
    q: "Khi một máy tính đang chạy cùng lúc nhiều chương trình (ví dụ: vừa nghe nhạc, vừa gõ văn bản, vừa tải tệp tin), hệ điều hành đang thực hiện cơ chế nào?",
    options: [
      "Đa nhiệm (Multitasking)",
      "Đơn nhiệm (Single-tasking)",
      "Xử lý theo lô tuần tự (Batch processing)",
      "Chạy một luồng duy nhất (Single-threading)"
    ],
    answer: 0,
    explain: "Đa nhiệm (Multitasking) là khả năng của hệ điều hành cho phép thực thi đồng thời nhiều tiến trình hoặc ứng dụng tại cùng một thời điểm.",
  },
  {
    id: "b1-08",
    q: "Trong quá trình khởi động máy tính, hệ điều hành được nạp từ đâu vào đâu để bắt đầu hoạt động?",
    options: [
      "Từ bộ nhớ ngoài (ổ đĩa cứng/SSD) vào bộ nhớ trong (RAM)",
      "Từ bộ nhớ trong (RAM) sang ổ đĩa flash USB",
      "Từ màn hình máy tính vào bộ vi xử lý CPU",
      "Từ bàn phím vào màn hình hiển thị"
    ],
    answer: 0,
    explain: "Khi máy tính bật nguồn, chương trình khởi động trong ROM (BIOS/UEFI) sẽ tìm và nạp các mô-đun cốt lõi của hệ điều hành từ ổ cứng (lưu trữ ngoài) vào RAM để thực thi.",
  },
  {
    id: "b1-09",
    q: "Công nghệ xác thực sinh trắc học nào sau đây thường được hệ điều hành trên điện thoại thông minh hỗ trợ để mở khóa thiết bị?",
    options: [
      "Cảm biến vân tay và nhận diện khuôn mặt 3D",
      "Quét đĩa mềm hệ thống",
      "Đo nhiệt độ phòng học",
      "Nhận diện giọng nói của đài phát thanh"
    ],
    answer: 0,
    explain: "Các thiết bị di động thông minh hiện đại đều tích hợp nhận diện sinh trắc học vân tay (Fingerprint) hoặc khuôn mặt (Face ID) do hệ điều hành quản lý bảo mật.",
  },
  {
    id: "b1-10",
    q: "Phát biểu nào sau đây là ĐÚNG khi so sánh hệ điều hành cho máy tính cá nhân (PC) và hệ điều hành cho thiết bị di động?",
    options: [
      "Hệ điều hành di động được tối ưu sâu cho kích thước màn hình nhỏ và giới hạn dung lượng pin hơn so với PC",
      "Hệ điều hành PC không thể kết nối Internet, còn di động thì luôn kết nối",
      "Hệ điều hành di động không thể chạy được các trò chơi hay ứng dụng nhắn tin",
      "Hệ điều hành PC không hỗ trợ chuột hay bàn phím rời"
    ],
    answer: 0,
    explain: "Thiết bị di động có dung lượng pin hạn chế và màn hình nhỏ, do đó hệ điều hành di động phải tối ưu rất khắt khe về sử dụng năng lượng và diện tích hiển thị.",
  }
];
