<!-- header -->
<header class="">
    <div class="contain">
        <div class="logo">
            <a href="index.php">
                <img src="images/logo-1.png" alt="">
            </a>
        </div>
        <div class="toggle"><span></span></div>
        <nav class="ease" nav="">
            <ul id="nav">
                <li class="">
                    <a href="index.php" class="<?= ($page == 'index' || $page == '') ? 'active' : '' ?>">Home</a>
                </li>
                <li class="">
                    <a href="patient.php" class="<?= ($page == '') ? 'active' : '' ?>">Patients</a>
                </li>
                <li>
                    <a href="contact.php" class="webBtn">Contact Us <i class="fa fa-level-up"></i></a>
                </li>

            </ul>

        </nav>


        <div class="clearfix"></div>
    </div>
</header>