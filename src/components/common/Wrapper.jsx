import React from "react";

function Wrapper(props) {
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <aside
            id="layout-menu"
            class="layout-menu menu-vertical menu bg-menu-theme"
            data-bg-class="bg-menu-theme"
            style={{
              touchAction:
                "none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);",
            }}
          >
            <div class="app-brand demo">
              <a href="index.html" class="app-brand-link">
                <span class="app-brand-logo demo me-1">
                  <span style={{ color: "var(--bs-primary)" }}>
                    <svg
                      width="30"
                      height="24"
                      viewBox="0 0 250 196"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.077704"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z"
                        fill="black"
                      ></path>
                      <path
                        opacity="0.077704"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z"
                        fill="black"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.077704"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z"
                        fill="black"
                      ></path>
                      <path
                        opacity="0.077704"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z"
                        fill="black"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                        fill="white"
                        fill-opacity="0.15"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                        fill="white"
                        fill-opacity="0.3"
                      ></path>
                    </svg>
                  </span>
                </span>
                <span class="app-brand-text demo menu-text fw-semibold ms-2">
                  Materio
                </span>
              </a>

              <a
                href="javascript:void(0);"
                class="layout-menu-toggle menu-link text-large ms-auto"
              >
                <i class="mdi menu-toggle-icon d-xl-block align-middle mdi-20px"></i>
              </a>
            </div>

            <div class="menu-inner-shadow" style={{ display: "none" }}></div>

            <ul class="menu-inner py-1 ps ps--active-y">
              <li class="menu-item active open">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-home-outline"></i>
                  <div data-i18n="Dashboards">Dashboards</div>
                  <div class="badge bg-danger rounded-pill ms-auto">5</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="dashboards-crm.html" class="menu-link">
                      <div data-i18n="CRM">CRM</div>
                    </a>
                  </li>
                  <li class="menu-item active">
                    <a href="index.html" class="menu-link">
                      <div data-i18n="Analytics">Analytics</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-ecommerce-dashboard.html" class="menu-link">
                      <div data-i18n="eCommerce">eCommerce</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-logistics-dashboard.html" class="menu-link">
                      <div data-i18n="Logistics">Logistics</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-academy-dashboard.html" class="menu-link">
                      <div data-i18n="Academy">Academy</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-window-maximize"></i>
                  <div data-i18n="Layouts">Layouts</div>
                </a>

                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="layouts-collapsed-menu.html" class="menu-link">
                      <div data-i18n="Collapsed menu">Collapsed menu</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-content-navbar.html" class="menu-link">
                      <div data-i18n="Content navbar">Content navbar</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="layouts-content-navbar-with-sidebar.html"
                      class="menu-link"
                    >
                      <div data-i18n="Content nav + Sidebar">
                        Content nav + Sidebar
                      </div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-navbar-full.html" class="menu-link">
                      <div data-i18n="Navbar full">Navbar full</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="layouts-navbar-full-with-sidebar.html"
                      class="menu-link"
                    >
                      <div data-i18n="Navbar full + Sidebar">
                        Navbar full + Sidebar
                      </div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="../horizontal-menu-template"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Horizontal">Horizontal</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-without-menu.html" class="menu-link">
                      <div data-i18n="Without menu">Without menu</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-without-navbar.html" class="menu-link">
                      <div data-i18n="Without navbar">Without navbar</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-fluid.html" class="menu-link">
                      <div data-i18n="Fluid">Fluid</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-container.html" class="menu-link">
                      <div data-i18n="Container">Container</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-blank.html" class="menu-link">
                      <div data-i18n="Blank">Blank</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-flip-to-front"></i>
                  <div data-i18n="Front Pages">Front Pages</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a
                      href="../front-pages/landing-page.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Landing">Landing</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="../front-pages/pricing-page.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Pricing">Pricing</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="../front-pages/payment-page.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Payment">Payment</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="../front-pages/checkout-page.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Checkout">Checkout</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="../front-pages/help-center-landing.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Help Center">Help Center</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-header fw-medium mt-4">
                <span class="menu-header-text">Apps &amp; Pages</span>
              </li>
              <li class="menu-item">
                <a href="app-email.html" class="menu-link">
                  <i class="menu-icon tf-icons mdi mdi-email-outline"></i>
                  <div data-i18n="Email">Email</div>
                </a>
              </li>
              <li class="menu-item">
                <a href="app-chat.html" class="menu-link">
                  <i class="menu-icon tf-icons mdi mdi-message-outline"></i>
                  <div data-i18n="Chat">Chat</div>
                </a>
              </li>
              <li class="menu-item">
                <a href="app-calendar.html" class="menu-link">
                  <i class="menu-icon tf-icons mdi mdi-calendar-blank-outline"></i>
                  <div data-i18n="Calendar">Calendar</div>
                </a>
              </li>
              <li class="menu-item">
                <a href="app-kanban.html" class="menu-link">
                  <i class="menu-icon tf-icons mdi mdi-view-grid-outline"></i>
                  <div data-i18n="Kanban">Kanban</div>
                </a>
              </li>

              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-domain"></i>
                  <div data-i18n="eCommerce">eCommerce</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="app-ecommerce-dashboard.html" class="menu-link">
                      <div data-i18n="Dashboard">Dashboard</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Products">Products</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-product-list.html"
                          class="menu-link"
                        >
                          <div data-i18n="Product list">Product list</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-product-add.html"
                          class="menu-link"
                        >
                          <div data-i18n="Add Product">Add Product</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-category-list.html"
                          class="menu-link"
                        >
                          <div data-i18n="Category list">Category list</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Order">Order</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-order-list.html"
                          class="menu-link"
                        >
                          <div data-i18n="Order list">Order list</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-order-details.html"
                          class="menu-link"
                        >
                          <div data-i18n="Order Details">Order Details</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Customer">Customer</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-customer-all.html"
                          class="menu-link"
                        >
                          <div data-i18n="All Customers">All Customers</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="javascript:void(0);"
                          class="menu-link menu-toggle waves-effect"
                        >
                          <div data-i18n="Customer Details">
                            Customer Details
                          </div>
                        </a>
                        <ul class="menu-sub">
                          <li class="menu-item">
                            <a
                              href="app-ecommerce-customer-details-overview.html"
                              class="menu-link"
                            >
                              <div data-i18n="Overview">Overview</div>
                            </a>
                          </li>
                          <li class="menu-item">
                            <a
                              href="app-ecommerce-customer-details-security.html"
                              class="menu-link"
                            >
                              <div data-i18n="Security">Security</div>
                            </a>
                          </li>
                          <li class="menu-item">
                            <a
                              href="app-ecommerce-customer-details-billing.html"
                              class="menu-link"
                            >
                              <div data-i18n="Address &amp; Billing">
                                Address &amp; Billing
                              </div>
                            </a>
                          </li>
                          <li class="menu-item">
                            <a
                              href="app-ecommerce-customer-details-notifications.html"
                              class="menu-link"
                            >
                              <div data-i18n="Notifications">Notifications</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a
                      href="app-ecommerce-manage-reviews.html"
                      class="menu-link"
                    >
                      <div data-i18n="Manage reviews">Manage reviews</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-ecommerce-referral.html" class="menu-link">
                      <div data-i18n="Referrals">Referrals</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Settings">Settings</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-settings-detail.html"
                          class="menu-link"
                        >
                          <div data-i18n="Store details">Store details</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-settings-payments.html"
                          class="menu-link"
                        >
                          <div data-i18n="Payments">Payments</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-settings-checkout.html"
                          class="menu-link"
                        >
                          <div data-i18n="Checkout">Checkout</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-settings-shipping.html"
                          class="menu-link"
                        >
                          <div data-i18n="Shipping &amp; delivery">
                            Shipping &amp; delivery
                          </div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-settings-locations.html"
                          class="menu-link"
                        >
                          <div data-i18n="Locations">Locations</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="app-ecommerce-settings-notifications.html"
                          class="menu-link"
                        >
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-notebook"></i>
                  <div data-i18n="Academy">Academy</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="app-academy-dashboard.html" class="menu-link">
                      <div data-i18n="Dashboard">Dashboard</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-academy-course.html" class="menu-link">
                      <div data-i18n="My Course">My Course</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-academy-course-details.html" class="menu-link">
                      <div data-i18n="Course Details">Course Details</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-truck-outline"></i>
                  <div data-i18n="Logistics">Logistics</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="app-logistics-dashboard.html" class="menu-link">
                      <div data-i18n="Dashboard">Dashboard</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-logistics-fleet.html" class="menu-link">
                      <div data-i18n="Fleet">Fleet</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-content-paste"></i>
                  <div data-i18n="Invoice">Invoice</div>
                  <div class="badge bg-label-danger rounded-pill ms-auto">
                    4
                  </div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="app-invoice-list.html" class="menu-link">
                      <div data-i18n="List">List</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-invoice-preview.html" class="menu-link">
                      <div data-i18n="Preview">Preview</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-invoice-edit.html" class="menu-link">
                      <div data-i18n="Edit">Edit</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-invoice-add.html" class="menu-link">
                      <div data-i18n="Add">Add</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-account-outline"></i>
                  <div data-i18n="Users">Users</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="app-user-list.html" class="menu-link">
                      <div data-i18n="List">List</div>
                    </a>
                  </li>

                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="View">View</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a href="app-user-view-account.html" class="menu-link">
                          <div data-i18n="Account">Account</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="app-user-view-security.html" class="menu-link">
                          <div data-i18n="Security">Security</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="app-user-view-billing.html" class="menu-link">
                          <div data-i18n="Billing &amp; Plans">
                            Billing &amp; Plans
                          </div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="app-user-view-notifications.html"
                          class="menu-link"
                        >
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="app-user-view-connections.html"
                          class="menu-link"
                        >
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-cog-outline"></i>
                  <div data-i18n="Roles &amp; Permissions">
                    Roles &amp; Permissions
                  </div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="app-access-roles.html" class="menu-link">
                      <div data-i18n="Roles">Roles</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="app-access-permission.html" class="menu-link">
                      <div data-i18n="Permission">Permission</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-file-document-multiple-outline"></i>
                  <div data-i18n="Pages">Pages</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="User Profile">User Profile</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a href="pages-profile-user.html" class="menu-link">
                          <div data-i18n="Profile">Profile</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="pages-profile-teams.html" class="menu-link">
                          <div data-i18n="Teams">Teams</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="pages-profile-projects.html" class="menu-link">
                          <div data-i18n="Projects">Projects</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="pages-profile-connections.html"
                          class="menu-link"
                        >
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Account Settings">Account Settings</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="pages-account-settings-account.html"
                          class="menu-link"
                        >
                          <div data-i18n="Account">Account</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="pages-account-settings-security.html"
                          class="menu-link"
                        >
                          <div data-i18n="Security">Security</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="pages-account-settings-billing.html"
                          class="menu-link"
                        >
                          <div data-i18n="Billing &amp; Plans">
                            Billing &amp; Plans
                          </div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="pages-account-settings-notifications.html"
                          class="menu-link"
                        >
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="pages-account-settings-connections.html"
                          class="menu-link"
                        >
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a href="pages-faq.html" class="menu-link">
                      <div data-i18n="FAQ">FAQ</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="pages-pricing.html" class="menu-link">
                      <div data-i18n="Pricing">Pricing</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Misc">Misc</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="pages-misc-error.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Error">Error</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="pages-misc-under-maintenance.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Under Maintenance">
                            Under Maintenance
                          </div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="pages-misc-comingsoon.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Coming Soon">Coming Soon</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="pages-misc-not-authorized.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Not Authorized">Not Authorized</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="pages-misc-server-error.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Server Error">Server Error</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-lock-open-outline"></i>
                  <div data-i18n="Authentications">Authentications</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Login">Login</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="auth-login-basic.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="auth-login-cover.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Register">Register</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="auth-register-basic.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="auth-register-cover.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="auth-register-multisteps.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Multi-steps">Multi-steps</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Verify Email">Verify Email</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="auth-verify-email-basic.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="auth-verify-email-cover.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Reset Password">Reset Password</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="auth-reset-password-basic.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="auth-reset-password-cover.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Forgot Password">Forgot Password</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="auth-forgot-password-basic.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="auth-forgot-password-cover.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Two Steps">Two Steps</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="auth-two-steps-basic.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="auth-two-steps-cover.html"
                          class="menu-link"
                          target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-dots-horizontal"></i>
                  <div data-i18n="Wizard Examples">Wizard Examples</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="wizard-ex-checkout.html" class="menu-link">
                      <div data-i18n="Checkout">Checkout</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="wizard-ex-property-listing.html" class="menu-link">
                      <div data-i18n="Property Listing">Property Listing</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="wizard-ex-create-deal.html" class="menu-link">
                      <div data-i18n="Create Deal">Create Deal</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a href="modal-examples.html" class="menu-link">
                  <i class="menu-icon tf-icons mdi mdi-open-in-new"></i>
                  <div data-i18n="Modal Examples">Modal Examples</div>
                </a>
              </li>

              <li class="menu-header fw-medium mt-4">
                <span class="menu-header-text">Components</span>
              </li>

              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-credit-card-outline"></i>
                  <div data-i18n="Cards">Cards</div>
                  <div class="badge bg-primary rounded-pill ms-auto">6</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="cards-basic.html" class="menu-link">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="cards-advance.html" class="menu-link">
                      <div data-i18n="Advance">Advance</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="cards-statistics.html" class="menu-link">
                      <div data-i18n="Statistics">Statistics</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="cards-analytics.html" class="menu-link">
                      <div data-i18n="Analytics">Analytics</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="cards-gamifications.html" class="menu-link">
                      <div data-i18n="Gamifications">Gamifications</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="cards-actions.html" class="menu-link">
                      <div data-i18n="Actions">Actions</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-item">
                <a
                  href="javascript:void(0)"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-archive-outline"></i>
                  <div data-i18n="User interface">User interface</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="ui-accordion.html" class="menu-link">
                      <div data-i18n="Accordion">Accordion</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-alerts.html" class="menu-link">
                      <div data-i18n="Alerts">Alerts</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-badges.html" class="menu-link">
                      <div data-i18n="Badges">Badges</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-buttons.html" class="menu-link">
                      <div data-i18n="Buttons">Buttons</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-carousel.html" class="menu-link">
                      <div data-i18n="Carousel">Carousel</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-collapse.html" class="menu-link">
                      <div data-i18n="Collapse">Collapse</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-dropdowns.html" class="menu-link">
                      <div data-i18n="Dropdowns">Dropdowns</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-footer.html" class="menu-link">
                      <div data-i18n="Footer">Footer</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-list-groups.html" class="menu-link">
                      <div data-i18n="List Groups">List Groups</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-modals.html" class="menu-link">
                      <div data-i18n="Modals">Modals</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-navbar.html" class="menu-link">
                      <div data-i18n="Navbar">Navbar</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-offcanvas.html" class="menu-link">
                      <div data-i18n="Offcanvas">Offcanvas</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-pagination-breadcrumbs.html" class="menu-link">
                      <div data-i18n="Pagination &amp; Breadcrumbs">
                        Pagination &amp; Breadcrumbs
                      </div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-progress.html" class="menu-link">
                      <div data-i18n="Progress">Progress</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-spinners.html" class="menu-link">
                      <div data-i18n="Spinners">Spinners</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-tabs-pills.html" class="menu-link">
                      <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-toasts.html" class="menu-link">
                      <div data-i18n="Toasts">Toasts</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-tooltips-popovers.html" class="menu-link">
                      <div data-i18n="Tooltips &amp; Popovers">
                        Tooltips &amp; Popovers
                      </div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="ui-typography.html" class="menu-link">
                      <div data-i18n="Typography">Typography</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-item">
                <a
                  href="javascript:void(0)"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-star-outline"></i>
                  <div data-i18n="Extended UI">Extended UI</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="extended-ui-avatar.html" class="menu-link">
                      <div data-i18n="Avatar">Avatar</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="extended-ui-blockui.html" class="menu-link">
                      <div data-i18n="BlockUI">BlockUI</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="extended-ui-drag-and-drop.html" class="menu-link">
                      <div data-i18n="Drag &amp; Drop">Drag &amp; Drop</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="extended-ui-media-player.html" class="menu-link">
                      <div data-i18n="Media Player">Media Player</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="extended-ui-perfect-scrollbar.html"
                      class="menu-link"
                    >
                      <div data-i18n="Perfect Scrollbar">Perfect Scrollbar</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="extended-ui-star-ratings.html" class="menu-link">
                      <div data-i18n="Star Ratings">Star Ratings</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="extended-ui-sweetalert2.html" class="menu-link">
                      <div data-i18n="SweetAlert2">SweetAlert2</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="extended-ui-text-divider.html" class="menu-link">
                      <div data-i18n="Text Divider">Text Divider</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="javascript:void(0);"
                      class="menu-link menu-toggle waves-effect"
                    >
                      <div data-i18n="Timeline">Timeline</div>
                    </a>
                    <ul class="menu-sub">
                      <li class="menu-item">
                        <a
                          href="extended-ui-timeline-basic.html"
                          class="menu-link"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a
                          href="extended-ui-timeline-fullscreen.html"
                          class="menu-link"
                        >
                          <div data-i18n="Fullscreen">Fullscreen</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a href="extended-ui-tour.html" class="menu-link">
                      <div data-i18n="Tour">Tour</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="extended-ui-treeview.html" class="menu-link">
                      <div data-i18n="Treeview">Treeview</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="extended-ui-misc.html" class="menu-link">
                      <div data-i18n="Miscellaneous">Miscellaneous</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-item">
                <a href="icons-mdi.html" class="menu-link">
                  <i class="menu-icon tf-icons mdi mdi-google-circles-extended"></i>
                  <div data-i18n="Icons">Icons</div>
                </a>
              </li>

              <li class="menu-header fw-medium mt-4">
                <span class="menu-header-text">Forms &amp; Tables</span>
              </li>

              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-form-select"></i>
                  <div data-i18n="Form Elements">Form Elements</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="forms-basic-inputs.html" class="menu-link">
                      <div data-i18n="Basic Inputs">Basic Inputs</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="forms-input-groups.html" class="menu-link">
                      <div data-i18n="Input groups">Input groups</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="forms-custom-options.html" class="menu-link">
                      <div data-i18n="Custom Options">Custom Options</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="forms-editors.html" class="menu-link">
                      <div data-i18n="Editors">Editors</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="forms-file-upload.html" class="menu-link">
                      <div data-i18n="File Upload">File Upload</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="forms-pickers.html" class="menu-link">
                      <div data-i18n="Pickers">Pickers</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="forms-selects.html" class="menu-link">
                      <div data-i18n="Select &amp; Tags">Select &amp; Tags</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="forms-sliders.html" class="menu-link">
                      <div data-i18n="Sliders">Sliders</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="forms-switches.html" class="menu-link">
                      <div data-i18n="Switches">Switches</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="forms-extras.html" class="menu-link">
                      <div data-i18n="Extras">Extras</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-cube-outline"></i>
                  <div data-i18n="Form Layouts">Form Layouts</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="form-layouts-vertical.html" class="menu-link">
                      <div data-i18n="Vertical Form">Vertical Form</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="form-layouts-horizontal.html" class="menu-link">
                      <div data-i18n="Horizontal Form">Horizontal Form</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="form-layouts-sticky.html" class="menu-link">
                      <div data-i18n="Sticky Actions">Sticky Actions</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-dots-horizontal"></i>
                  <div data-i18n="Form Wizard">Form Wizard</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="form-wizard-numbered.html" class="menu-link">
                      <div data-i18n="Numbered">Numbered</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="form-wizard-icons.html" class="menu-link">
                      <div data-i18n="Icons">Icons</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a href="form-validation.html" class="menu-link">
                  <i class="menu-icon tf-icons mdi mdi-checkbox-marked-circle-outline"></i>
                  <div data-i18n="Form Validation">Form Validation</div>
                </a>
              </li>

              <li class="menu-item">
                <a href="tables-basic.html" class="menu-link">
                  <i class="menu-icon tf-icons mdi mdi-table"></i>
                  <div data-i18n="Tables">Tables</div>
                </a>
              </li>
              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi-grid"></i>
                  <div data-i18n="Datatables">Datatables</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="tables-datatables-basic.html" class="menu-link">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="tables-datatables-advanced.html" class="menu-link">
                      <div data-i18n="Advanced">Advanced</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="tables-datatables-extensions.html"
                      class="menu-link"
                    >
                      <div data-i18n="Extensions">Extensions</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-header fw-medium mt-4">
                <span class="menu-header-text">Charts &amp; Maps</span>
              </li>
              <li class="menu-item">
                <a
                  href="javascript:void(0);"
                  class="menu-link menu-toggle waves-effect"
                >
                  <i class="menu-icon tf-icons mdi mdi mdi-chart-donut"></i>
                  <div data-i18n="Charts">Charts</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="charts-apex.html" class="menu-link">
                      <div data-i18n="Apex Charts">Apex Charts</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="charts-chartjs.html" class="menu-link">
                      <div data-i18n="ChartJS">ChartJS</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a href="maps-leaflet.html" class="menu-link">
                  <i class="menu-icon tf-icons mdi mdi-map-outline"></i>
                  <div data-i18n="Leaflet Maps">Leaflet Maps</div>
                </a>
              </li>

              <li class="menu-header fw-medium mt-4">
                <span class="menu-header-text">Misc</span>
              </li>
              <li class="menu-item">
                <a
                  href="https://themeselection.com/support/"
                  target="_blank"
                  class="menu-link"
                >
                  <i class="menu-icon tf-icons mdi mdi-lifebuoy"></i>
                  <div data-i18n="Support">Support</div>
                </a>
              </li>
              <li class="menu-item">
                <a
                  href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/"
                  target="_blank"
                  class="menu-link"
                >
                  <i class="menu-icon tf-icons mdi mdi-file-document-multiple-outline"></i>
                  <div data-i18n="Documentation">Documentation</div>
                </a>
              </li>
              <div class="ps__rail-x" style={{ left: "0px; bottom: 0px;" }}>
                <div
                  class="ps__thumb-x"
                  tabindex="0"
                  style={{ left: "0px; width: 0px;" }}
                ></div>
              </div>
              <div
                class="ps__rail-y"
                style={{ top: "0px; height: 216px; right: 4px;" }}
              >
                <div
                  class="ps__thumb-y"
                  tabindex="0"
                  style={{ top: "0px; height: 23px;" }}
                ></div>
              </div>
            </ul>
          </aside>

          <div class="layout-page">
            <nav
              class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a
                  class="nav-item nav-link px-0 me-xl-4"
                  href="javascript:void(0)"
                >
                  <i class="mdi mdi-menu mdi-24px"></i>
                </a>
              </div>

              <div
                class="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <div class="navbar-nav align-items-center">
                  <div class="nav-item navbar-search-wrapper mb-0">
                    <a
                      class="nav-item nav-link search-toggler fw-normal px-0"
                      href="javascript:void(0);"
                    >
                      <i class="mdi mdi-magnify mdi-24px scaleX-n1-rtl"></i>
                      <span class="d-none d-md-inline-block text-muted">
                        Search (Ctrl+/)
                      </span>
                    </a>
                  </div>
                </div>

                <ul class="navbar-nav flex-row align-items-center ms-auto">
                  <li class="nav-item dropdown-language dropdown me-1 me-xl-0">
                    <a
                      class="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow waves-effect waves-light"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-translate mdi-24px"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end py-2">
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="javascript:void(0);"
                          data-language="en"
                        >
                          <span class="align-middle">English</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect active"
                          href="javascript:void(0);"
                          data-language="fr"
                        >
                          <span class="align-middle">French</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="javascript:void(0);"
                          data-language="de"
                        >
                          <span class="align-middle">German</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="javascript:void(0);"
                          data-language="pt"
                        >
                          <span class="align-middle">Portuguese</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                    <a
                      class="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow waves-effect waves-light"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <i class="mdi mdi-24px mdi-weather-sunny"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-styles">
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="javascript:void(0);"
                          data-theme="light"
                        >
                          <span class="align-middle">
                            <i class="mdi mdi-weather-sunny me-2"></i>Light
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="javascript:void(0);"
                          data-theme="dark"
                        >
                          <span class="align-middle">
                            <i class="mdi mdi-weather-night me-2"></i>Dark
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="javascript:void(0);"
                          data-theme="system"
                        >
                          <span class="align-middle">
                            <i class="mdi mdi-monitor me-2"></i>System
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown-shortcuts navbar-dropdown dropdown me-1 me-xl-0">
                    <a
                      class="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow waves-effect waves-light"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-view-grid-outline mdi-24px"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end py-0">
                      <div class="dropdown-menu-header border-bottom">
                        <div class="dropdown-header d-flex align-items-center py-3">
                          <h6 class="mb-0 me-auto">Shortcuts</h6>
                          <a
                            href="javascript:void(0)"
                            class="dropdown-shortcuts-add text-heading"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Add shortcuts"
                            data-bs-original-title="Add shortcuts"
                          >
                            <i class="mdi mdi-plus mdi-24px"></i>
                          </a>
                        </div>
                      </div>
                      <div class="dropdown-shortcuts-list scrollable-container ps">
                        <div class="row row-bordered overflow-visible g-0">
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                              <i class="mdi mdi-calendar-blank mdi-24px"></i>
                            </span>
                            <a href="app-calendar.html" class="stretched-link">
                              Calendar
                            </a>
                            <small>Appointments</small>
                          </div>
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                              <i class="mdi mdi mdi-content-paste mdi-24px"></i>
                            </span>
                            <a
                              href="app-invoice-list.html"
                              class="stretched-link"
                            >
                              Invoice App
                            </a>
                            <small>Manage Accounts</small>
                          </div>
                        </div>
                        <div class="row row-bordered overflow-visible g-0">
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                              <i class="mdi mdi-account-outline mdi-24px"></i>
                            </span>
                            <a href="app-user-list.html" class="stretched-link">
                              User App
                            </a>
                            <small>Manage Users</small>
                          </div>
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                              <i class="mdi mdi-shield-check-outline mdi-24px"></i>
                            </span>
                            <a
                              href="app-access-roles.html"
                              class="stretched-link"
                            >
                              Role Management
                            </a>
                            <small>Permission</small>
                          </div>
                        </div>
                        <div class="row row-bordered overflow-visible g-0">
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                              <i class="mdi mdi-monitor mdi-24px"></i>
                            </span>
                            <a href="index.html" class="stretched-link">
                              Dashboard
                            </a>
                            <small>User Profile</small>
                          </div>
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                              <i class="mdi mdi-cog-outline mdi-24px"></i>
                            </span>
                            <a
                              href="pages-account-settings-account.html"
                              class="stretched-link"
                            >
                              Setting
                            </a>
                            <small>Account Settings</small>
                          </div>
                        </div>
                        <div class="row row-bordered overflow-visible g-0">
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                              <i class="mdi mdi-help-circle-outline mdi-24px"></i>
                            </span>
                            <a
                              href="pages-help-center-landing.html"
                              class="stretched-link"
                            >
                              Help Center
                            </a>
                            <small>FAQs &amp; Articles</small>
                          </div>
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                              <i class="mdi mdi-dock-window mdi-24px"></i>
                            </span>
                            <a
                              href="modal-examples.html"
                              class="stretched-link"
                            >
                              Modals
                            </a>
                            <small>Useful Popups</small>
                          </div>
                        </div>
                        <div
                          class="ps__rail-x"
                          style={{ left: "0px; bottom: 0px;" }}
                        >
                          <div
                            class="ps__thumb-x"
                            tabindex="0"
                            style={{ left: "0px; width: 0px;" }}
                          ></div>
                        </div>
                        <div
                          class="ps__rail-y"
                          style={{ top: "0px; right: 0px;" }}
                        >
                          <div
                            class="ps__thumb-y"
                            tabindex="0"
                            style={{ top: "0px; height: 0px;" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="nav-item dropdown-notifications navbar-dropdown dropdown me-2 me-xl-1">
                    <a
                      class="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow waves-effect waves-light"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-bell-outline mdi-24px"></i>
                      <span class="position-absolute top-0 start-50 translate-middle-y badge badge-dot bg-danger mt-2 border"></span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end py-0">
                      <li class="dropdown-menu-header border-bottom">
                        <div class="dropdown-header d-flex align-items-center py-3">
                          <h6 class="fw-normal mb-0 me-auto">Notification</h6>
                          <span class="badge rounded-pill bg-label-primary">
                            8 New
                          </span>
                        </div>
                      </li>
                      <li class="dropdown-notifications-list scrollable-container ps">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
                            <div class="d-flex align-items-center gap-2">
                              <div class="flex-shrink-0">
                                <div class="avatar me-1">
                                  <img
                                    src="../../assets/img/avatars/1.png"
                                    alt=""
                                    class="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                                <h6 class="mb-1 text-truncate">
                                  Congratulation Lettie 🎉
                                </h6>
                                <small class="text-truncate text-body">
                                  Won the monthly best seller gold badge
                                </small>
                              </div>
                              <div class="flex-shrink-0 dropdown-notifications-actions">
                                <small class="text-muted">1h ago</small>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
                            <div class="d-flex align-items-center gap-2">
                              <div class="flex-shrink-0">
                                <div class="avatar me-1">
                                  <span class="avatar-initial rounded-circle bg-label-danger">
                                    CF
                                  </span>
                                </div>
                              </div>
                              <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                                <h6 class="mb-1 text-truncate">
                                  Charles Franklin
                                </h6>
                                <small class="text-truncate text-body">
                                  Accepted your connection
                                </small>
                              </div>
                              <div class="flex-shrink-0 dropdown-notifications-actions">
                                <small class="text-muted">12hr ago</small>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
                            <div class="d-flex align-items-center gap-2">
                              <div class="flex-shrink-0">
                                <div class="avatar me-1">
                                  <img
                                    src="../../assets/img/avatars/2.png"
                                    alt=""
                                    class="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                                <h6 class="mb-1 text-truncate">
                                  New Message ✉️
                                </h6>
                                <small class="text-truncate text-body">
                                  You have new message from Natalie
                                </small>
                              </div>
                              <div class="flex-shrink-0 dropdown-notifications-actions">
                                <small class="text-muted">1h ago</small>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
                            <div class="d-flex align-items-center gap-2">
                              <div class="flex-shrink-0">
                                <div class="avatar me-1">
                                  <span class="avatar-initial rounded-circle bg-label-success">
                                    <i class="mdi mdi-cart-outline"></i>
                                  </span>
                                </div>
                              </div>
                              <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                                <h6 class="mb-1 text-truncate">
                                  Whoo! You have new order 🛒
                                </h6>
                                <small class="text-truncate text-body">
                                  ACME Inc. made new order $1,154
                                </small>
                              </div>
                              <div class="flex-shrink-0 dropdown-notifications-actions">
                                <small class="text-muted">1 day ago</small>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
                            <div class="d-flex align-items-center gap-2">
                              <div class="flex-shrink-0">
                                <div class="avatar me-1">
                                  <img
                                    src="../../assets/img/avatars/9.png"
                                    alt=""
                                    class="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                                <h6 class="mb-1 text-truncate">
                                  Application has been approved 🚀
                                </h6>
                                <small class="text-truncate text-body">
                                  Your ABC project application has been
                                  approved.
                                </small>
                              </div>
                              <div class="flex-shrink-0 dropdown-notifications-actions">
                                <small class="text-muted">2 days ago</small>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
                            <div class="d-flex align-items-center gap-2">
                              <div class="flex-shrink-0">
                                <div class="avatar me-1">
                                  <span class="avatar-initial rounded-circle bg-label-success">
                                    <i class="mdi mdi-chart-pie-outline"></i>
                                  </span>
                                </div>
                              </div>
                              <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                                <h6 class="mb-1 text-truncate">
                                  Monthly report is generated
                                </h6>
                                <small class="text-truncate text-body">
                                  July monthly financial report is generated{" "}
                                </small>
                              </div>
                              <div class="flex-shrink-0 dropdown-notifications-actions">
                                <small class="text-muted">3 days ago</small>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
                            <div class="d-flex align-items-center gap-2">
                              <div class="flex-shrink-0">
                                <div class="avatar me-1">
                                  <img
                                    src="../../assets/img/avatars/5.png"
                                    alt=""
                                    class="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                                <h6 class="mb-1 text-truncate">
                                  Send connection request
                                </h6>
                                <small class="text-truncate text-body">
                                  Peter sent you connection request
                                </small>
                              </div>
                              <div class="flex-shrink-0 dropdown-notifications-actions">
                                <small class="text-muted">4 days ago</small>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
                            <div class="d-flex align-items-center gap-2">
                              <div class="flex-shrink-0">
                                <div class="avatar me-1">
                                  <img
                                    src="../../assets/img/avatars/6.png"
                                    alt=""
                                    class="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                                <h6 class="mb-1 text-truncate">
                                  New message from Jane
                                </h6>
                                <small class="text-truncate text-body">
                                  Your have new message from Jane
                                </small>
                              </div>
                              <div class="flex-shrink-0 dropdown-notifications-actions">
                                <small class="text-muted">5 days ago</small>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
                            <div class="d-flex align-items-center gap-2">
                              <div class="flex-shrink-0">
                                <div class="avatar me-1">
                                  <span class="avatar-initial rounded-circle bg-label-warning">
                                    <i class="mdi mdi-alert-circle-outline"></i>
                                  </span>
                                </div>
                              </div>
                              <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                                <h6 class="mb-1">CPU is running high</h6>
                                <small class="text-truncate text-body">
                                  CPU Utilization Percent is currently at
                                  88.63%,
                                </small>
                              </div>
                              <div class="flex-shrink-0 dropdown-notifications-actions">
                                <small class="text-muted">5 days ago</small>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div
                          class="ps__rail-x"
                          style={{ left: "0px; bottom: 0px;" }}
                        >
                          <div
                            class="ps__thumb-x"
                            tabindex="0"
                            style={{ left: "0px; width: 0px;" }}
                          ></div>
                        </div>
                        <div class="ps__rail-y" style="top: 0px; right: 0px;">
                          <div
                            class="ps__thumb-y"
                            tabindex="0"
                            style="top: 0px; height: 0px;"
                          ></div>
                        </div>
                      </li>
                      <li class="dropdown-menu-footer border-top p-3">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-primary d-flex justify-content-center waves-effect waves-light"
                        >
                          Read all notifications
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      class="nav-link dropdown-toggle hide-arrow p-0 show"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <div class="avatar avatar-online">
                        <img
                          src="../../assets/img/avatars/1.png"
                          alt=""
                          class="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end mt-3 py-2 show"
                      data-bs-popper="static"
                    >
                      <li>
                        <a
                          class="dropdown-item pb-2 mb-1 waves-effect"
                          href="pages-account-settings-account.html"
                        >
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-2 pe-1">
                              <div class="avatar avatar-online">
                                <img
                                  src="../../assets/img/avatars/1.png"
                                  alt=""
                                  class="w-px-40 h-auto rounded-circle"
                                />
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-0">John Doe</h6>
                              <small class="text-muted">Admin</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown-divider my-0"></div>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="pages-profile-user.html"
                        >
                          <i class="mdi mdi-account-outline me-1 mdi-20px"></i>
                          <span class="align-middle">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="pages-account-settings-account.html"
                        >
                          <i class="mdi mdi-cog-outline me-1 mdi-20px"></i>
                          <span class="align-middle">Settings</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="pages-account-settings-billing.html"
                        >
                          <span class="d-flex align-items-center align-middle">
                            <i class="flex-shrink-0 mdi mdi-credit-card-outline me-1 mdi-20px"></i>
                            <span class="flex-grow-1 align-middle ms-1">
                              Billing
                            </span>
                            <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                              4
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown-divider my-1"></div>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="pages-help-center-landing.html"
                        >
                          <i class="mdi mdi-lifebuoy me-1 mdi-20px"></i>
                          <span class="align-middle">Help</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="pages-faq.html"
                        >
                          <i class="mdi mdi-help-circle-outline me-1 mdi-20px"></i>
                          <span class="align-middle">FAQ</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="pages-pricing.html"
                        >
                          <i class="mdi mdi-currency-usd me-1 mdi-20px"></i>
                          <span class="align-middle">Pricing</span>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown-divider my-1"></div>
                      </li>
                      <li>
                        <a
                          class="dropdown-item waves-effect"
                          href="auth-login-cover.html"
                          target="_blank"
                        >
                          <i class="mdi mdi-logout me-1 mdi-20px"></i>
                          <span class="align-middle">Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="navbar-search-wrapper search-input-wrapper d-none">
                <input
                  type="text"
                  class="form-control search-input container-xxl border-0"
                  placeholder="Search..."
                  aria-label="Search..."
                />
                <i class="mdi mdi-close search-toggler cursor-pointer"></i>
              </div>
            </nav>

            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row gy-4">
                  <div class="col-md-12 col-lg-4">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title mb-1">
                          Congratulations John! 🎉
                        </h4>
                        <p class="pb-0">Best seller of the month</p>
                        <h4 class="text-primary mb-1">$42.8k</h4>
                        <p class="mb-2 pb-1">78% of target 🚀</p>
                        <a
                          href="javascript:;"
                          class="btn btn-sm btn-primary waves-effect waves-light"
                        >
                          View Sales
                        </a>
                      </div>
                      <img
                        src="../../assets/img/icons/misc/triangle-light.png"
                        class="scaleX-n1-rtl position-absolute bottom-0 end-0"
                        width="166"
                        alt="triangle background"
                        data-app-light-img="icons/misc/triangle-light.png"
                        data-app-dark-img="icons/misc/triangle-dark.png"
                      />
                      <img
                        src="../../assets/img/illustrations/trophy.png"
                        class="scaleX-n1-rtl position-absolute bottom-0 end-0 me-4 mb-4 pb-2"
                        width="83"
                        alt="view sales"
                      />
                    </div>
                  </div>

                  <div class="col-lg-8">
                    <div class="card">
                      <div class="card-header">
                        <div class="d-flex align-items-center justify-content-between">
                          <h5 class="card-title m-0 me-2">Transactions</h5>
                          <div class="dropdown">
                            <button
                              class="btn p-0"
                              type="button"
                              id="transactionID"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="mdi mdi-dots-vertical mdi-24px"></i>
                            </button>
                            <div
                              class="dropdown-menu dropdown-menu-end"
                              aria-labelledby="transactionID"
                            >
                              <a
                                class="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Refresh
                              </a>
                              <a
                                class="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Share
                              </a>
                              <a
                                class="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Update
                              </a>
                            </div>
                          </div>
                        </div>
                        <p class="mt-3">
                          <span class="fw-medium">Total 48.5% growth</span> 😎
                          this month
                        </p>
                      </div>
                      <div class="card-body">
                        <div class="row g-3">
                          <div class="col-md-3 col-6">
                            <div class="d-flex align-items-center">
                              <div class="avatar">
                                <div class="avatar-initial bg-primary rounded shadow">
                                  <i class="mdi mdi-trending-up mdi-24px"></i>
                                </div>
                              </div>
                              <div class="ms-3">
                                <div class="small mb-1">Sales</div>
                                <h5 class="mb-0">245k</h5>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 col-6">
                            <div class="d-flex align-items-center">
                              <div class="avatar">
                                <div class="avatar-initial bg-success rounded shadow">
                                  <i class="mdi mdi-account-outline mdi-24px"></i>
                                </div>
                              </div>
                              <div class="ms-3">
                                <div class="small mb-1">Customers</div>
                                <h5 class="mb-0">12.5k</h5>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 col-6">
                            <div class="d-flex align-items-center">
                              <div class="avatar">
                                <div class="avatar-initial bg-warning rounded shadow">
                                  <i class="mdi mdi-cellphone-link mdi-24px"></i>
                                </div>
                              </div>
                              <div class="ms-3">
                                <div class="small mb-1">Product</div>
                                <h5 class="mb-0">1.54k</h5>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3 col-6">
                            <div class="d-flex align-items-center">
                              <div class="avatar">
                                <div class="avatar-initial bg-info rounded shadow">
                                  <i class="mdi mdi-currency-usd mdi-24px"></i>
                                </div>
                              </div>
                              <div class="ms-3">
                                <div class="small mb-1">Revenue</div>
                                <h5 class="mb-0">$88k</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <div class="card">
                      <div class="card-header">
                        <div class="d-flex justify-content-between">
                          <h5 class="mb-1">Weekly Overview</h5>
                          <div class="dropdown">
                            <button
                              class="btn p-0"
                              type="button"
                              id="weeklyOverviewDropdown"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="mdi mdi-dots-vertical mdi-24px"></i>
                            </button>
                            <div
                              class="dropdown-menu dropdown-menu-end"
                              aria-labelledby="weeklyOverviewDropdown"
                            >
                              <a
                                class="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Refresh
                              </a>
                              <a
                                class="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Share
                              </a>
                              <a
                                class="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Update
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-body" style="position: relative;">
                        <div
                          id="weeklyOverviewChart"
                          style="min-height: 200px;"
                        >
                          <div
                            id="apexchartsqxx4sob5f"
                            class="apexcharts-canvas apexchartsqxx4sob5f apexcharts-theme-light"
                            style="width: 348px; height: 200px;"
                          >
                            <svg
                              id="SvgjsSvg2032"
                              width="348"
                              height="200"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlnsSvgjs="http://svgjs.dev"
                              class="apexcharts-svg apexcharts-zoomable"
                              xmlnsData="ApexChartsNS"
                              transform="translate(-16, -9)"
                              style="background: transparent;"
                            >
                              <g
                                id="SvgjsG2034"
                                class="apexcharts-inner apexcharts-graphical"
                                transform="translate(68.8735159556071, 30)"
                              >
                                <defs id="SvgjsDefs2033">
                                  <linearGradient
                                    id="SvgjsLinearGradient2038"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop2039"
                                      stop-opacity="0.4"
                                      stop-color="rgba(216,227,240,0.4)"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2040"
                                      stop-opacity="0.5"
                                      stop-color="rgba(190,209,230,0.5)"
                                      offset="1"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2041"
                                      stop-opacity="0.5"
                                      stop-color="rgba(190,209,230,0.5)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                  <clipPath id="gridRectMaskqxx4sob5f">
                                    <rect
                                      id="SvgjsRect2043"
                                      width="291.7170524597168"
                                      height="165"
                                      x="-16.590568415323894"
                                      y="0"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                  <clipPath id="forecastMaskqxx4sob5f"></clipPath>
                                  <clipPath id="nonForecastMaskqxx4sob5f"></clipPath>
                                  <clipPath id="gridRectMarkerMaskqxx4sob5f">
                                    <rect
                                      id="SvgjsRect2044"
                                      width="262.535915629069"
                                      height="169"
                                      x="-2"
                                      y="-2"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <rect
                                  id="SvgjsRect2042"
                                  width="12.92679578145345"
                                  height="165"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  stroke-width="0"
                                  stroke-dasharray="3"
                                  fill="url(#SvgjsLinearGradient2038)"
                                  class="apexcharts-xcrosshairs"
                                  y2="165"
                                  filter="none"
                                  fill-opacity="0.9"
                                ></rect>
                                <g
                                  id="SvgjsG2063"
                                  class="apexcharts-xaxis"
                                  transform="translate(0, 0)"
                                >
                                  <g
                                    id="SvgjsG2064"
                                    class="apexcharts-xaxis-texts-g"
                                    transform="translate(0, -4)"
                                  ></g>
                                </g>
                                <g id="SvgjsG2082" class="apexcharts-grid">
                                  <g
                                    id="SvgjsG2083"
                                    class="apexcharts-gridlines-horizontal"
                                  >
                                    <line
                                      id="SvgjsLine2085"
                                      x1="-14.590568415323892"
                                      y1="0"
                                      x2="273.1264840443929"
                                      y2="0"
                                      stroke="#e7e7e8"
                                      stroke-dasharray="8"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2086"
                                      x1="-14.590568415323892"
                                      y1="55"
                                      x2="273.1264840443929"
                                      y2="55"
                                      stroke="#e7e7e8"
                                      stroke-dasharray="8"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2087"
                                      x1="-14.590568415323892"
                                      y1="110"
                                      x2="273.1264840443929"
                                      y2="110"
                                      stroke="#e7e7e8"
                                      stroke-dasharray="8"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2088"
                                      x1="-14.590568415323892"
                                      y1="165"
                                      x2="273.1264840443929"
                                      y2="165"
                                      stroke="#e7e7e8"
                                      stroke-dasharray="8"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                  </g>
                                  <g
                                    id="SvgjsG2084"
                                    class="apexcharts-gridlines-vertical"
                                  ></g>
                                  <line
                                    id="SvgjsLine2090"
                                    x1="0"
                                    y1="165"
                                    x2="258.535915629069"
                                    y2="165"
                                    stroke="transparent"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2089"
                                    x1="0"
                                    y1="1"
                                    x2="0"
                                    y2="165"
                                    stroke="transparent"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                </g>
                                <g
                                  id="SvgjsG2045"
                                  class="apexcharts-bar-series apexcharts-plot-series"
                                >
                                  <g
                                    id="SvgjsG2046"
                                    class="apexcharts-series"
                                    rel="1"
                                    seriesName="Sales"
                                    dataRealIndex="0"
                                  >
                                    <path
                                      id="SvgjsPath2050"
                                      d="M -6.463397890726725 157L -6.463397890726725 114.33333333333333Q -6.463397890726725 106.33333333333333 1.5366021092732751 106.33333333333333L -1.5366021092732751 106.33333333333333Q 6.463397890726725 106.33333333333333 6.463397890726725 114.33333333333333L 6.463397890726725 114.33333333333333L 6.463397890726725 157Q 6.463397890726725 165 -1.5366021092732751 165L 1.5366021092732751 165Q -6.463397890726725 165 -6.463397890726725 157z"
                                      fill="rgba(240,242,248,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskqxx4sob5f)"
                                      pathTo="M -6.463397890726725 157L -6.463397890726725 114.33333333333333Q -6.463397890726725 106.33333333333333 1.5366021092732751 106.33333333333333L -1.5366021092732751 106.33333333333333Q 6.463397890726725 106.33333333333333 6.463397890726725 114.33333333333333L 6.463397890726725 114.33333333333333L 6.463397890726725 157Q 6.463397890726725 165 -1.5366021092732751 165L 1.5366021092732751 165Q -6.463397890726725 165 -6.463397890726725 157z"
                                      pathFrom="M -6.463397890726725 157L -6.463397890726725 157L 6.463397890726725 157L 6.463397890726725 157L 6.463397890726725 157L 6.463397890726725 157L 6.463397890726725 157L -6.463397890726725 157"
                                      cy="106.33333333333333"
                                      cx="6.463397890726725"
                                      j="0"
                                      val="32"
                                      barHeight="58.66666666666667"
                                      barWidth="12.92679578145345"
                                    ></path>
                                    <path
                                      id="SvgjsPath2052"
                                      d="M 36.625921380784774 157L 36.625921380784774 72.16666666666666Q 36.625921380784774 64.16666666666666 44.625921380784774 64.16666666666666L 41.552717162238224 64.16666666666666Q 49.552717162238224 64.16666666666666 49.552717162238224 72.16666666666666L 49.552717162238224 72.16666666666666L 49.552717162238224 157Q 49.552717162238224 165 41.552717162238224 165L 44.625921380784774 165Q 36.625921380784774 165 36.625921380784774 157z"
                                      fill="rgba(240,242,248,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskqxx4sob5f)"
                                      pathTo="M 36.625921380784774 157L 36.625921380784774 72.16666666666666Q 36.625921380784774 64.16666666666666 44.625921380784774 64.16666666666666L 41.552717162238224 64.16666666666666Q 49.552717162238224 64.16666666666666 49.552717162238224 72.16666666666666L 49.552717162238224 72.16666666666666L 49.552717162238224 157Q 49.552717162238224 165 41.552717162238224 165L 44.625921380784774 165Q 36.625921380784774 165 36.625921380784774 157z"
                                      pathFrom="M 36.625921380784774 157L 36.625921380784774 157L 49.552717162238224 157L 49.552717162238224 157L 49.552717162238224 157L 49.552717162238224 157L 49.552717162238224 157L 36.625921380784774 157"
                                      cy="64.16666666666666"
                                      cx="49.552717162238224"
                                      j="1"
                                      val="55"
                                      barHeight="100.83333333333334"
                                      barWidth="12.92679578145345"
                                    ></path>
                                    <path
                                      id="SvgjsPath2054"
                                      d="M 79.71524065229627 157L 79.71524065229627 90.5Q 79.71524065229627 82.5 87.71524065229627 82.5L 84.64203643374972 82.5Q 92.64203643374972 82.5 92.64203643374972 90.5L 92.64203643374972 90.5L 92.64203643374972 157Q 92.64203643374972 165 84.64203643374972 165L 87.71524065229627 165Q 79.71524065229627 165 79.71524065229627 157z"
                                      fill="rgba(240,242,248,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskqxx4sob5f)"
                                      pathTo="M 79.71524065229627 157L 79.71524065229627 90.5Q 79.71524065229627 82.5 87.71524065229627 82.5L 84.64203643374972 82.5Q 92.64203643374972 82.5 92.64203643374972 90.5L 92.64203643374972 90.5L 92.64203643374972 157Q 92.64203643374972 165 84.64203643374972 165L 87.71524065229627 165Q 79.71524065229627 165 79.71524065229627 157z"
                                      pathFrom="M 79.71524065229627 157L 79.71524065229627 157L 92.64203643374972 157L 92.64203643374972 157L 92.64203643374972 157L 92.64203643374972 157L 92.64203643374972 157L 79.71524065229627 157"
                                      cy="82.5"
                                      cx="92.64203643374972"
                                      j="2"
                                      val="45"
                                      barHeight="82.5"
                                      barWidth="12.92679578145345"
                                    ></path>
                                    <path
                                      id="SvgjsPath2056"
                                      d="M 122.80455992380777 157L 122.80455992380777 35.5Q 122.80455992380777 27.5 130.80455992380777 27.5L 127.73135570526122 27.5Q 135.73135570526122 27.5 135.73135570526122 35.5L 135.73135570526122 35.5L 135.73135570526122 157Q 135.73135570526122 165 127.73135570526122 165L 130.80455992380777 165Q 122.80455992380777 165 122.80455992380777 157z"
                                      fill="rgba(144,85,253,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskqxx4sob5f)"
                                      pathTo="M 122.80455992380777 157L 122.80455992380777 35.5Q 122.80455992380777 27.5 130.80455992380777 27.5L 127.73135570526122 27.5Q 135.73135570526122 27.5 135.73135570526122 35.5L 135.73135570526122 35.5L 135.73135570526122 157Q 135.73135570526122 165 127.73135570526122 165L 130.80455992380777 165Q 122.80455992380777 165 122.80455992380777 157z"
                                      pathFrom="M 122.80455992380777 157L 122.80455992380777 157L 135.73135570526122 157L 135.73135570526122 157L 135.73135570526122 157L 135.73135570526122 157L 135.73135570526122 157L 122.80455992380777 157"
                                      cy="27.5"
                                      cx="135.73135570526122"
                                      j="3"
                                      val="75"
                                      barHeight="137.5"
                                      barWidth="12.92679578145345"
                                    ></path>
                                    <path
                                      id="SvgjsPath2058"
                                      d="M 165.89387919531927 157L 165.89387919531927 72.16666666666666Q 165.89387919531927 64.16666666666666 173.89387919531927 64.16666666666666L 170.82067497677272 64.16666666666666Q 178.82067497677272 64.16666666666666 178.82067497677272 72.16666666666666L 178.82067497677272 72.16666666666666L 178.82067497677272 157Q 178.82067497677272 165 170.82067497677272 165L 173.89387919531927 165Q 165.89387919531927 165 165.89387919531927 157z"
                                      fill="rgba(240,242,248,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskqxx4sob5f)"
                                      pathTo="M 165.89387919531927 157L 165.89387919531927 72.16666666666666Q 165.89387919531927 64.16666666666666 173.89387919531927 64.16666666666666L 170.82067497677272 64.16666666666666Q 178.82067497677272 64.16666666666666 178.82067497677272 72.16666666666666L 178.82067497677272 72.16666666666666L 178.82067497677272 157Q 178.82067497677272 165 170.82067497677272 165L 173.89387919531927 165Q 165.89387919531927 165 165.89387919531927 157z"
                                      pathFrom="M 165.89387919531927 157L 165.89387919531927 157L 178.82067497677272 157L 178.82067497677272 157L 178.82067497677272 157L 178.82067497677272 157L 178.82067497677272 157L 165.89387919531927 157"
                                      cy="64.16666666666666"
                                      cx="178.82067497677272"
                                      j="4"
                                      val="55"
                                      barHeight="100.83333333333334"
                                      barWidth="12.92679578145345"
                                    ></path>
                                    <path
                                      id="SvgjsPath2060"
                                      d="M 208.98319846683077 157L 208.98319846683077 108.83333333333333Q 208.98319846683077 100.83333333333333 216.98319846683077 100.83333333333333L 213.90999424828422 100.83333333333333Q 221.90999424828422 100.83333333333333 221.90999424828422 108.83333333333333L 221.90999424828422 108.83333333333333L 221.90999424828422 157Q 221.90999424828422 165 213.90999424828422 165L 216.98319846683077 165Q 208.98319846683077 165 208.98319846683077 157z"
                                      fill="rgba(240,242,248,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskqxx4sob5f)"
                                      pathTo="M 208.98319846683077 157L 208.98319846683077 108.83333333333333Q 208.98319846683077 100.83333333333333 216.98319846683077 100.83333333333333L 213.90999424828422 100.83333333333333Q 221.90999424828422 100.83333333333333 221.90999424828422 108.83333333333333L 221.90999424828422 108.83333333333333L 221.90999424828422 157Q 221.90999424828422 165 213.90999424828422 165L 216.98319846683077 165Q 208.98319846683077 165 208.98319846683077 157z"
                                      pathFrom="M 208.98319846683077 157L 208.98319846683077 157L 221.90999424828422 157L 221.90999424828422 157L 221.90999424828422 157L 221.90999424828422 157L 221.90999424828422 157L 208.98319846683077 157"
                                      cy="100.83333333333333"
                                      cx="221.90999424828422"
                                      j="5"
                                      val="35"
                                      barHeight="64.16666666666667"
                                      barWidth="12.92679578145345"
                                    ></path>
                                    <path
                                      id="SvgjsPath2062"
                                      d="M 252.07251773834227 157L 252.07251773834227 44.66666666666666Q 252.07251773834227 36.66666666666666 260.0725177383423 36.66666666666666L 256.9993135197957 36.66666666666666Q 264.9993135197957 36.66666666666666 264.9993135197957 44.66666666666666L 264.9993135197957 44.66666666666666L 264.9993135197957 157Q 264.9993135197957 165 256.9993135197957 165L 260.0725177383423 165Q 252.07251773834227 165 252.07251773834227 157z"
                                      fill="rgba(240,242,248,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskqxx4sob5f)"
                                      pathTo="M 252.07251773834227 157L 252.07251773834227 44.66666666666666Q 252.07251773834227 36.66666666666666 260.0725177383423 36.66666666666666L 256.9993135197957 36.66666666666666Q 264.9993135197957 36.66666666666666 264.9993135197957 44.66666666666666L 264.9993135197957 44.66666666666666L 264.9993135197957 157Q 264.9993135197957 165 256.9993135197957 165L 260.0725177383423 165Q 252.07251773834227 165 252.07251773834227 157z"
                                      pathFrom="M 252.07251773834227 157L 252.07251773834227 157L 264.9993135197957 157L 264.9993135197957 157L 264.9993135197957 157L 264.9993135197957 157L 264.9993135197957 157L 252.07251773834227 157"
                                      cy="36.66666666666666"
                                      cx="264.9993135197957"
                                      j="6"
                                      val="70"
                                      barHeight="128.33333333333334"
                                      barWidth="12.92679578145345"
                                    ></path>
                                    <g
                                      id="SvgjsG2048"
                                      class="apexcharts-bar-goals-markers"
                                      style="pointer-events: none"
                                    >
                                      <g
                                        id="SvgjsG2049"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2051"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2053"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2055"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2057"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2059"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2061"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG2047"
                                    class="apexcharts-datalabels"
                                    dataRealIndex="0"
                                  ></g>
                                </g>
                                <line
                                  id="SvgjsLine2091"
                                  x1="-14.590568415323892"
                                  y1="0"
                                  x2="273.1264840443929"
                                  y2="0"
                                  stroke="#b6b6b6"
                                  stroke-dasharray="0"
                                  stroke-width="1"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs"
                                ></line>
                                <line
                                  id="SvgjsLine2092"
                                  x1="-14.590568415323892"
                                  y1="0"
                                  x2="273.1264840443929"
                                  y2="0"
                                  stroke-dasharray="0"
                                  stroke-width="0"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs-hidden"
                                ></line>
                                <g
                                  id="SvgjsG2093"
                                  class="apexcharts-yaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2094"
                                  class="apexcharts-xaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2095"
                                  class="apexcharts-point-annotations"
                                ></g>
                                <rect
                                  id="SvgjsRect2096"
                                  width="0"
                                  height="0"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  stroke-width="0"
                                  stroke="none"
                                  stroke-dasharray="0"
                                  fill="#fefefe"
                                  class="apexcharts-zoom-rect"
                                ></rect>
                                <rect
                                  id="SvgjsRect2097"
                                  width="0"
                                  height="0"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  stroke-width="0"
                                  stroke="none"
                                  stroke-dasharray="0"
                                  fill="#fefefe"
                                  class="apexcharts-selection-rect"
                                ></rect>
                              </g>
                              <g
                                id="SvgjsG2072"
                                class="apexcharts-yaxis"
                                rel="0"
                                transform="translate(20.282947540283203, 0)"
                              >
                                <g
                                  id="SvgjsG2073"
                                  class="apexcharts-yaxis-texts-g"
                                >
                                  <text
                                    id="SvgjsText2074"
                                    font-family="Inter"
                                    x="20"
                                    y="31.3"
                                    text-anchor="end"
                                    dominant-baseline="auto"
                                    font-size="0.75rem"
                                    font-weight="400"
                                    fill="#b4b2b7"
                                    class="apexcharts-text apexcharts-yaxis-label "
                                    style="font-family: Inter;"
                                  >
                                    <tspan id="SvgjsTspan2075">90K</tspan>
                                    <title>90K</title>
                                  </text>
                                  <text
                                    id="SvgjsText2076"
                                    font-family="Inter"
                                    x="20"
                                    y="86.3"
                                    text-anchor="end"
                                    dominant-baseline="auto"
                                    font-size="0.75rem"
                                    font-weight="400"
                                    fill="#b4b2b7"
                                    class="apexcharts-text apexcharts-yaxis-label "
                                    style="font-family: Inter;"
                                  >
                                    <tspan id="SvgjsTspan2077">60K</tspan>
                                    <title>60K</title>
                                  </text>
                                  <text
                                    id="SvgjsText2078"
                                    font-family="Inter"
                                    x="20"
                                    y="141.3"
                                    text-anchor="end"
                                    dominant-baseline="auto"
                                    font-size="0.75rem"
                                    font-weight="400"
                                    fill="#b4b2b7"
                                    class="apexcharts-text apexcharts-yaxis-label "
                                    style="font-family: Inter;"
                                  >
                                    <tspan id="SvgjsTspan2079">30K</tspan>
                                    <title>30K</title>
                                  </text>
                                  <text
                                    id="SvgjsText2080"
                                    font-family="Inter"
                                    x="20"
                                    y="196.3"
                                    text-anchor="end"
                                    dominant-baseline="auto"
                                    font-size="0.75rem"
                                    font-weight="400"
                                    fill="#b4b2b7"
                                    class="apexcharts-text apexcharts-yaxis-label "
                                    style="font-family: Inter;"
                                  >
                                    <tspan id="SvgjsTspan2081">0K</tspan>
                                    <title>0K</title>
                                  </text>
                                </g>
                              </g>
                              <g
                                id="SvgjsG2035"
                                class="apexcharts-annotations"
                              ></g>
                            </svg>
                            <div
                              class="apexcharts-legend"
                              style="max-height: 100px;"
                            ></div>
                            <div class="apexcharts-tooltip apexcharts-theme-light">
                              <div
                                class="apexcharts-tooltip-title"
                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                              ></div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 1;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(240, 242, 248);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                              <div class="apexcharts-yaxistooltip-text"></div>
                            </div>
                          </div>
                        </div>
                        <div class="mt-1 mt-md-3">
                          <div class="d-flex align-items-center gap-3">
                            <h3 class="mb-0">45%</h3>
                            <p class="mb-0">
                              Your sales performance is 45% 😎 better compared
                              to last month
                            </p>
                          </div>
                          <div class="d-grid mt-3 mt-md-4">
                            <button
                              class="btn btn-primary waves-effect waves-light"
                              type="button"
                            >
                              Details
                            </button>
                          </div>
                        </div>
                        <div class="resize-triggers">
                          <div class="expand-trigger">
                            <div style="width: 389px; height: 351px;"></div>
                          </div>
                          <div class="contract-trigger"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <div class="card">
                      <div class="card-header d-flex align-items-center justify-content-between">
                        <h5 class="card-title m-0 me-2">Total Earning</h5>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="totalEarnings"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical mdi-24px"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="totalEarnings"
                          >
                            <a
                              class="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Last 28 Days
                            </a>
                            <a
                              class="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Last Month
                            </a>
                            <a
                              class="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Last Year
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="mb-3 mt-md-3 mb-md-5">
                          <div class="d-flex align-items-center">
                            <h2 class="mb-0">$24,895</h2>
                            <span class="text-success ms-2 fw-medium">
                              <i class="mdi mdi-menu-up mdi-24px"></i>
                              <small>10%</small>
                            </span>
                          </div>
                          <small class="mt-1">
                            Compared to $84,325 last year
                          </small>
                        </div>
                        <ul class="p-0 m-0">
                          <li class="d-flex mb-4 pb-md-2">
                            <div class="avatar flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/misc/zipcar.png"
                                alt="zipcar"
                                class="rounded"
                              />
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div class="me-2">
                                <h6 class="mb-0">Zipcar</h6>
                                <small>Vuejs, React &amp; HTML</small>
                              </div>
                              <div>
                                <h6 class="mb-2">$24,895.65</h6>
                                <div
                                  class="progress bg-label-primary"
                                  style="height: 4px"
                                >
                                  <div
                                    class="progress-bar bg-primary"
                                    style="width: 75%"
                                    role="progressbar"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="d-flex mb-4 pb-md-2">
                            <div class="avatar flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/misc/bitbank.png"
                                alt="bitbank"
                                class="rounded"
                              />
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div class="me-2">
                                <h6 class="mb-0">Bitbank</h6>
                                <small>Sketch, Figma &amp; XD</small>
                              </div>
                              <div>
                                <h6 class="mb-2">$8,6500.20</h6>
                                <div
                                  class="progress bg-label-info"
                                  style="height: 4px"
                                >
                                  <div
                                    class="progress-bar bg-info"
                                    style="width: 75%"
                                    role="progressbar"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="d-flex mb-md-3">
                            <div class="avatar flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/misc/aviato.png"
                                alt="aviato"
                                class="rounded"
                              />
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div class="me-2">
                                <h6 class="mb-0">Aviato</h6>
                                <small>HTML &amp; Angular</small>
                              </div>
                              <div>
                                <h6 class="mb-2">$1,2450.80</h6>
                                <div
                                  class="progress bg-label-secondary"
                                  style="height: 4px"
                                >
                                  <div
                                    class="progress-bar bg-secondary"
                                    style="width: 75%"
                                    role="progressbar"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <div class="row gy-4">
                      <div class="col-sm-6">
                        <div class="card h-100">
                          <div class="card-header pb-0">
                            <h4 class="mb-0">$86.4k</h4>
                          </div>
                          <div class="card-body" style="position: relative;">
                            <div
                              id="totalProfitLineChart"
                              class="mb-3"
                              style="min-height: 90px;"
                            >
                              <div
                                id="apexchartslvmu4b0m"
                                class="apexcharts-canvas apexchartslvmu4b0m apexcharts-theme-light"
                                style="width: 142px; height: 90px;"
                              >
                                <svg
                                  id="SvgjsSvg2098"
                                  width="142"
                                  height="90"
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xmlnsSvgjs="http://svgjs.dev"
                                  class="apexcharts-svg apexcharts-zoomable"
                                  xmlnsData="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style="background: transparent;"
                                >
                                  <g
                                    id="SvgjsG2100"
                                    class="apexcharts-inner apexcharts-graphical"
                                    transform="translate(3, 15)"
                                  >
                                    <defs id="SvgjsDefs2099">
                                      <clipPath id="gridRectMasklvmu4b0m">
                                        <rect
                                          id="SvgjsRect2105"
                                          width="137"
                                          height="78"
                                          x="-3.5"
                                          y="-1.5"
                                          rx="0"
                                          ry="0"
                                          opacity="1"
                                          stroke-width="0"
                                          stroke="none"
                                          stroke-dasharray="0"
                                          fill="#fff"
                                        ></rect>
                                      </clipPath>
                                      <clipPath id="forecastMasklvmu4b0m"></clipPath>
                                      <clipPath id="nonForecastMasklvmu4b0m"></clipPath>
                                      <clipPath id="gridRectMarkerMasklvmu4b0m">
                                        <rect
                                          id="SvgjsRect2106"
                                          width="158"
                                          height="103"
                                          x="-14"
                                          y="-14"
                                          rx="0"
                                          ry="0"
                                          opacity="1"
                                          stroke-width="0"
                                          stroke="none"
                                          stroke-dasharray="0"
                                          fill="#fff"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine2104"
                                      x1="0"
                                      y1="0"
                                      x2="0"
                                      y2="75"
                                      stroke="#b6b6b6"
                                      stroke-dasharray="3"
                                      stroke-linecap="butt"
                                      class="apexcharts-xcrosshairs"
                                      x="0"
                                      y="0"
                                      width="1"
                                      height="75"
                                      fill="#b1b9c4"
                                      filter="none"
                                      fill-opacity="0.9"
                                      stroke-width="1"
                                    ></line>
                                    <g
                                      id="SvgjsG2123"
                                      class="apexcharts-xaxis"
                                      transform="translate(0, 0)"
                                    >
                                      <g
                                        id="SvgjsG2124"
                                        class="apexcharts-xaxis-texts-g"
                                        transform="translate(0, -4)"
                                      ></g>
                                    </g>
                                    <g id="SvgjsG2133" class="apexcharts-grid">
                                      <g
                                        id="SvgjsG2134"
                                        class="apexcharts-gridlines-horizontal"
                                      ></g>
                                      <g
                                        id="SvgjsG2135"
                                        class="apexcharts-gridlines-vertical"
                                      >
                                        <line
                                          id="SvgjsLine2136"
                                          x1="0"
                                          y1="0"
                                          x2="0"
                                          y2="75"
                                          stroke="#b4b2b7"
                                          stroke-dasharray="6"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                        <line
                                          id="SvgjsLine2137"
                                          x1="26"
                                          y1="0"
                                          x2="26"
                                          y2="75"
                                          stroke="#b4b2b7"
                                          stroke-dasharray="6"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                        <line
                                          id="SvgjsLine2138"
                                          x1="52"
                                          y1="0"
                                          x2="52"
                                          y2="75"
                                          stroke="#b4b2b7"
                                          stroke-dasharray="6"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                        <line
                                          id="SvgjsLine2139"
                                          x1="78"
                                          y1="0"
                                          x2="78"
                                          y2="75"
                                          stroke="#b4b2b7"
                                          stroke-dasharray="6"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                        <line
                                          id="SvgjsLine2140"
                                          x1="104"
                                          y1="0"
                                          x2="104"
                                          y2="75"
                                          stroke="#b4b2b7"
                                          stroke-dasharray="6"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                        <line
                                          id="SvgjsLine2141"
                                          x1="130"
                                          y1="0"
                                          x2="130"
                                          y2="75"
                                          stroke="#b4b2b7"
                                          stroke-dasharray="6"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                      </g>
                                      <line
                                        id="SvgjsLine2143"
                                        x1="0"
                                        y1="75"
                                        x2="130"
                                        y2="75"
                                        stroke="transparent"
                                        stroke-dasharray="0"
                                        stroke-linecap="butt"
                                      ></line>
                                      <line
                                        id="SvgjsLine2142"
                                        x1="0"
                                        y1="1"
                                        x2="0"
                                        y2="75"
                                        stroke="transparent"
                                        stroke-dasharray="0"
                                        stroke-linecap="butt"
                                      ></line>
                                    </g>
                                    <g
                                      id="SvgjsG2107"
                                      class="apexcharts-line-series apexcharts-plot-series"
                                    >
                                      <g
                                        id="SvgjsG2108"
                                        class="apexcharts-series"
                                        seriesName="seriesx1"
                                        dataLongestSeries="true"
                                        rel="1"
                                        dataRealIndex="0"
                                      >
                                        <path
                                          id="SvgjsPath2122"
                                          d="M 0 75L 26 45L 52 67.5L 78 30L 104 52.5L 130 7.5"
                                          fill="none"
                                          fill-opacity="1"
                                          stroke="rgba(144,85,253,0.85)"
                                          stroke-opacity="1"
                                          stroke-linecap="butt"
                                          stroke-width="3"
                                          stroke-dasharray="0"
                                          class="apexcharts-line"
                                          index="0"
                                          clip-path="url(#gridRectMasklvmu4b0m)"
                                          pathTo="M 0 75L 26 45L 52 67.5L 78 30L 104 52.5L 130 7.5"
                                          pathFrom="M -1 75L -1 75L 26 75L 52 75L 78 75L 104 75L 130 75"
                                        ></path>
                                        <g
                                          id="SvgjsG2109"
                                          class="apexcharts-series-markers-wrap"
                                          dataRealIndex="0"
                                        >
                                          <g
                                            id="SvgjsG2111"
                                            class="apexcharts-series-markers"
                                            clip-path="url(#gridRectMarkerMasklvmu4b0m)"
                                          >
                                            <circle
                                              id="SvgjsCircle2112"
                                              r="6"
                                              cx="0"
                                              cy="75"
                                              class="apexcharts-marker no-pointer-events wm8vdu2in"
                                              stroke="transparent"
                                              fill="transparent"
                                              fill-opacity="1"
                                              stroke-width="3"
                                              stroke-opacity="0.9"
                                              rel="0"
                                              j="0"
                                              index="0"
                                              default-marker-size="6"
                                            ></circle>
                                            <circle
                                              id="SvgjsCircle2113"
                                              r="6"
                                              cx="26"
                                              cy="45"
                                              class="apexcharts-marker no-pointer-events wcs1kbie3"
                                              stroke="transparent"
                                              fill="transparent"
                                              fill-opacity="1"
                                              stroke-width="3"
                                              stroke-opacity="0.9"
                                              rel="1"
                                              j="1"
                                              index="0"
                                              default-marker-size="6"
                                            ></circle>
                                          </g>
                                          <g
                                            id="SvgjsG2114"
                                            class="apexcharts-series-markers"
                                            clip-path="url(#gridRectMarkerMasklvmu4b0m)"
                                          >
                                            <circle
                                              id="SvgjsCircle2115"
                                              r="6"
                                              cx="52"
                                              cy="67.5"
                                              class="apexcharts-marker no-pointer-events w1tb37p7rh"
                                              stroke="transparent"
                                              fill="transparent"
                                              fill-opacity="1"
                                              stroke-width="3"
                                              stroke-opacity="0.9"
                                              rel="2"
                                              j="2"
                                              index="0"
                                              default-marker-size="6"
                                            ></circle>
                                          </g>
                                          <g
                                            id="SvgjsG2116"
                                            class="apexcharts-series-markers"
                                            clip-path="url(#gridRectMarkerMasklvmu4b0m)"
                                          >
                                            <circle
                                              id="SvgjsCircle2117"
                                              r="6"
                                              cx="78"
                                              cy="30"
                                              class="apexcharts-marker no-pointer-events wm9pyd2sz"
                                              stroke="transparent"
                                              fill="transparent"
                                              fill-opacity="1"
                                              stroke-width="3"
                                              stroke-opacity="0.9"
                                              rel="3"
                                              j="3"
                                              index="0"
                                              default-marker-size="6"
                                            ></circle>
                                          </g>
                                          <g
                                            id="SvgjsG2118"
                                            class="apexcharts-series-markers"
                                            clip-path="url(#gridRectMarkerMasklvmu4b0m)"
                                          >
                                            <circle
                                              id="SvgjsCircle2119"
                                              r="6"
                                              cx="104"
                                              cy="52.5"
                                              class="apexcharts-marker no-pointer-events waw2z4d0k"
                                              stroke="transparent"
                                              fill="transparent"
                                              fill-opacity="1"
                                              stroke-width="3"
                                              stroke-opacity="0.9"
                                              rel="4"
                                              j="4"
                                              index="0"
                                              default-marker-size="6"
                                            ></circle>
                                          </g>
                                          <g
                                            id="SvgjsG2120"
                                            class="apexcharts-series-markers"
                                            clip-path="url(#gridRectMarkerMasklvmu4b0m)"
                                          >
                                            <circle
                                              id="SvgjsCircle2121"
                                              r="6"
                                              cx="130"
                                              cy="7.5"
                                              class="apexcharts-marker no-pointer-events wkxy07sici"
                                              stroke="#9055fd"
                                              fill="#ffffff"
                                              fill-opacity="1"
                                              stroke-width="3"
                                              stroke-opacity="0.9"
                                              rel="5"
                                              j="5"
                                              index="0"
                                              default-marker-size="6"
                                            ></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG2110"
                                        class="apexcharts-datalabels"
                                        dataRealIndex="0"
                                      ></g>
                                    </g>
                                    <line
                                      id="SvgjsLine2144"
                                      x1="0"
                                      y1="0"
                                      x2="130"
                                      y2="0"
                                      stroke="#b6b6b6"
                                      stroke-dasharray="0"
                                      stroke-width="1"
                                      stroke-linecap="butt"
                                      class="apexcharts-ycrosshairs"
                                    ></line>
                                    <line
                                      id="SvgjsLine2145"
                                      x1="0"
                                      y1="0"
                                      x2="130"
                                      y2="0"
                                      stroke-dasharray="0"
                                      stroke-width="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-ycrosshairs-hidden"
                                    ></line>
                                    <g
                                      id="SvgjsG2146"
                                      class="apexcharts-yaxis-annotations"
                                    ></g>
                                    <g
                                      id="SvgjsG2147"
                                      class="apexcharts-xaxis-annotations"
                                    ></g>
                                    <g
                                      id="SvgjsG2148"
                                      class="apexcharts-point-annotations"
                                    ></g>
                                    <rect
                                      id="SvgjsRect2149"
                                      width="0"
                                      height="0"
                                      x="0"
                                      y="0"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fefefe"
                                      class="apexcharts-zoom-rect"
                                    ></rect>
                                    <rect
                                      id="SvgjsRect2150"
                                      width="0"
                                      height="0"
                                      x="0"
                                      y="0"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fefefe"
                                      class="apexcharts-selection-rect"
                                    ></rect>
                                  </g>
                                  <rect
                                    id="SvgjsRect2103"
                                    width="0"
                                    height="0"
                                    x="0"
                                    y="0"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    stroke-width="0"
                                    stroke="none"
                                    stroke-dasharray="0"
                                    fill="#fefefe"
                                  ></rect>
                                  <g
                                    id="SvgjsG2131"
                                    class="apexcharts-yaxis"
                                    rel="0"
                                    transform="translate(-8, 0)"
                                  >
                                    <g
                                      id="SvgjsG2132"
                                      class="apexcharts-yaxis-texts-g"
                                    ></g>
                                  </g>
                                  <g
                                    id="SvgjsG2101"
                                    class="apexcharts-annotations"
                                  ></g>
                                </svg>
                                <div
                                  class="apexcharts-legend"
                                  style="max-height: 45px;"
                                ></div>
                              </div>
                            </div>
                            <h6 class="text-center mb-0">Total Profit</h6>
                            <div class="resize-triggers">
                              <div class="expand-trigger">
                                <div style="width: 183px; height: 152px;"></div>
                              </div>
                              <div class="contract-trigger"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="card h-100">
                          <div class="card-header d-flex align-items-center justify-content-between">
                            <div class="avatar">
                              <div class="avatar-initial bg-secondary rounded-circle shadow">
                                <i class="mdi mdi-poll mdi-24px"></i>
                              </div>
                            </div>
                            <div class="dropdown">
                              <button
                                class="btn p-0"
                                type="button"
                                id="totalProfitID"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="mdi mdi-dots-vertical mdi-24px"></i>
                              </button>
                              <div
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="totalProfitID"
                              >
                                <a
                                  class="dropdown-item waves-effect"
                                  href="javascript:void(0);"
                                >
                                  Refresh
                                </a>
                                <a
                                  class="dropdown-item waves-effect"
                                  href="javascript:void(0);"
                                >
                                  Share
                                </a>
                                <a
                                  class="dropdown-item waves-effect"
                                  href="javascript:void(0);"
                                >
                                  Update
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="card-body mt-mg-1">
                            <h6 class="mb-2">Total Profit</h6>
                            <div class="d-flex flex-wrap align-items-center mb-2 pb-1">
                              <h4 class="mb-0 me-2">$25.6k</h4>
                              <small class="text-success mt-1">+42%</small>
                            </div>
                            <small>Weekly Project</small>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="card h-100">
                          <div class="card-header d-flex align-items-center justify-content-between">
                            <div class="avatar">
                              <div class="avatar-initial bg-primary rounded-circle shadow-sm">
                                <i class="mdi mdi-wallet-travel mdi-24px"></i>
                              </div>
                            </div>
                            <div class="dropdown">
                              <button
                                class="btn p-0"
                                type="button"
                                id="newProjectID"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="mdi mdi-dots-vertical mdi-24px"></i>
                              </button>
                              <div
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="newProjectID"
                              >
                                <a
                                  class="dropdown-item waves-effect"
                                  href="javascript:void(0);"
                                >
                                  Refresh
                                </a>
                                <a
                                  class="dropdown-item waves-effect"
                                  href="javascript:void(0);"
                                >
                                  Share
                                </a>
                                <a
                                  class="dropdown-item waves-effect"
                                  href="javascript:void(0);"
                                >
                                  Update
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="card-body mt-mg-1">
                            <h6 class="mb-2">New Project</h6>
                            <div class="d-flex flex-wrap align-items-center mb-2 pb-1">
                              <h4 class="mb-0 me-2">862</h4>
                              <small class="text-danger mt-1">-18%</small>
                            </div>
                            <small>Yearly Project</small>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="card h-100">
                          <div class="card-header pb-0">
                            <h4 class="mb-0">2,856</h4>
                          </div>
                          <div class="card-body" style="position: relative;">
                            <div
                              id="sessionsColumnChart"
                              class="mb-3"
                              style="min-height: 90px;"
                            >
                              <div
                                id="apexchartsqh8yptw6"
                                class="apexcharts-canvas apexchartsqh8yptw6 apexcharts-theme-light"
                                style="width: 142px; height: 90px;"
                              >
                                <svg
                                  id="SvgjsSvg2151"
                                  width="142"
                                  height="90"
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xmlnsSvgjs="http://svgjs.dev"
                                  class="apexcharts-svg apexcharts-zoomable"
                                  xmlnsData="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style="background: transparent;"
                                >
                                  <g
                                    id="SvgjsG2153"
                                    class="apexcharts-inner apexcharts-graphical"
                                    transform="translate(13.399999999999999, 20)"
                                  >
                                    <defs id="SvgjsDefs2152">
                                      <linearGradient
                                        id="SvgjsLinearGradient2156"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                      >
                                        <stop
                                          id="SvgjsStop2157"
                                          stop-opacity="0.4"
                                          stop-color="rgba(216,227,240,0.4)"
                                          offset="0"
                                        ></stop>
                                        <stop
                                          id="SvgjsStop2158"
                                          stop-opacity="0.5"
                                          stop-color="rgba(190,209,230,0.5)"
                                          offset="1"
                                        ></stop>
                                        <stop
                                          id="SvgjsStop2159"
                                          stop-opacity="0.5"
                                          stop-color="rgba(190,209,230,0.5)"
                                          offset="1"
                                        ></stop>
                                      </linearGradient>
                                      <clipPath id="gridRectMaskqh8yptw6">
                                        <rect
                                          id="SvgjsRect2161"
                                          width="136"
                                          height="70"
                                          x="-11.399999999999999"
                                          y="0"
                                          rx="0"
                                          ry="0"
                                          opacity="1"
                                          stroke-width="0"
                                          stroke="none"
                                          stroke-dasharray="0"
                                          fill="#fff"
                                        ></rect>
                                      </clipPath>
                                      <clipPath id="forecastMaskqh8yptw6"></clipPath>
                                      <clipPath id="nonForecastMaskqh8yptw6"></clipPath>
                                      <clipPath id="gridRectMarkerMaskqh8yptw6">
                                        <rect
                                          id="SvgjsRect2162"
                                          width="117.2"
                                          height="74"
                                          x="-2"
                                          y="-2"
                                          rx="0"
                                          ry="0"
                                          opacity="1"
                                          stroke-width="0"
                                          stroke="none"
                                          stroke-dasharray="0"
                                          fill="#fff"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                    <rect
                                      id="SvgjsRect2160"
                                      width="0"
                                      height="70"
                                      x="0"
                                      y="0"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke-dasharray="3"
                                      fill="url(#SvgjsLinearGradient2156)"
                                      class="apexcharts-xcrosshairs"
                                      y2="70"
                                      filter="none"
                                      fill-opacity="0.9"
                                    ></rect>
                                    <g
                                      id="SvgjsG2182"
                                      class="apexcharts-xaxis"
                                      transform="translate(0, 0)"
                                    >
                                      <g
                                        id="SvgjsG2183"
                                        class="apexcharts-xaxis-texts-g"
                                        transform="translate(0, -4)"
                                      ></g>
                                    </g>
                                    <g id="SvgjsG2192" class="apexcharts-grid">
                                      <g
                                        id="SvgjsG2193"
                                        class="apexcharts-gridlines-horizontal"
                                        style="display: none;"
                                      >
                                        <line
                                          id="SvgjsLine2195"
                                          x1="-9.399999999999999"
                                          y1="0"
                                          x2="122.6"
                                          y2="0"
                                          stroke="#e0e0e0"
                                          stroke-dasharray="0"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                        <line
                                          id="SvgjsLine2196"
                                          x1="-9.399999999999999"
                                          y1="17.5"
                                          x2="122.6"
                                          y2="17.5"
                                          stroke="#e0e0e0"
                                          stroke-dasharray="0"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                        <line
                                          id="SvgjsLine2197"
                                          x1="-9.399999999999999"
                                          y1="35"
                                          x2="122.6"
                                          y2="35"
                                          stroke="#e0e0e0"
                                          stroke-dasharray="0"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                        <line
                                          id="SvgjsLine2198"
                                          x1="-9.399999999999999"
                                          y1="52.5"
                                          x2="122.6"
                                          y2="52.5"
                                          stroke="#e0e0e0"
                                          stroke-dasharray="0"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                        <line
                                          id="SvgjsLine2199"
                                          x1="-9.399999999999999"
                                          y1="70"
                                          x2="122.6"
                                          y2="70"
                                          stroke="#e0e0e0"
                                          stroke-dasharray="0"
                                          stroke-linecap="butt"
                                          class="apexcharts-gridline"
                                        ></line>
                                      </g>
                                      <g
                                        id="SvgjsG2194"
                                        class="apexcharts-gridlines-vertical"
                                        style="display: none;"
                                      ></g>
                                      <line
                                        id="SvgjsLine2201"
                                        x1="0"
                                        y1="70"
                                        x2="113.2"
                                        y2="70"
                                        stroke="transparent"
                                        stroke-dasharray="0"
                                        stroke-linecap="butt"
                                      ></line>
                                      <line
                                        id="SvgjsLine2200"
                                        x1="0"
                                        y1="1"
                                        x2="0"
                                        y2="70"
                                        stroke="transparent"
                                        stroke-dasharray="0"
                                        stroke-linecap="butt"
                                      ></line>
                                    </g>
                                    <g
                                      id="SvgjsG2163"
                                      class="apexcharts-bar-series apexcharts-plot-series"
                                    >
                                      <g
                                        id="SvgjsG2164"
                                        class="apexcharts-series"
                                        rel="1"
                                        seriesName="seriesx1"
                                        dataRealIndex="0"
                                      >
                                        <rect
                                          id="SvgjsRect2167"
                                          width="5.66"
                                          height="70"
                                          x="-2.83"
                                          y="0"
                                          rx="4"
                                          ry="4"
                                          opacity="1"
                                          stroke-width="0"
                                          stroke="none"
                                          stroke-dasharray="0"
                                          fill="#F0F2F8"
                                          class="apexcharts-backgroundBar"
                                        ></rect>
                                        <path
                                          id="SvgjsPath2169"
                                          d="M -2.83 66L -2.83 47.75Q -2.83 43.75 1.17 43.75L -1.17 43.75Q 2.83 43.75 2.83 47.75L 2.83 47.75L 2.83 66Q 2.83 70 -1.17 70L 1.17 70Q -2.83 70 -2.83 66z"
                                          fill="rgba(255,76,81,0.85)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="round"
                                          stroke-width="0"
                                          stroke-dasharray="0"
                                          class="apexcharts-bar-area"
                                          index="0"
                                          clip-path="url(#gridRectMaskqh8yptw6)"
                                          pathTo="M -2.83 66L -2.83 47.75Q -2.83 43.75 1.17 43.75L -1.17 43.75Q 2.83 43.75 2.83 47.75L 2.83 47.75L 2.83 66Q 2.83 70 -1.17 70L 1.17 70Q -2.83 70 -2.83 66z"
                                          pathFrom="M -2.83 66L -2.83 66L 2.83 66L 2.83 66L 2.83 66L 2.83 66L 2.83 66L -2.83 66"
                                          cy="43.75"
                                          cx="2.83"
                                          j="0"
                                          val="30"
                                          barHeight="26.25"
                                          barWidth="5.66"
                                        ></path>
                                        <rect
                                          id="SvgjsRect2170"
                                          width="5.66"
                                          height="70"
                                          x="25.47"
                                          y="0"
                                          rx="4"
                                          ry="4"
                                          opacity="1"
                                          stroke-width="0"
                                          stroke="none"
                                          stroke-dasharray="0"
                                          fill="#F0F2F8"
                                          class="apexcharts-backgroundBar"
                                        ></rect>
                                        <path
                                          id="SvgjsPath2172"
                                          d="M 25.47 66L 25.47 12.75Q 25.47 8.75 29.47 8.75L 27.13 8.75Q 31.13 8.75 31.13 12.75L 31.13 12.75L 31.13 66Q 31.13 70 27.13 70L 29.47 70Q 25.47 70 25.47 66z"
                                          fill="rgba(144,85,253,0.85)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="round"
                                          stroke-width="0"
                                          stroke-dasharray="0"
                                          class="apexcharts-bar-area"
                                          index="0"
                                          clip-path="url(#gridRectMaskqh8yptw6)"
                                          pathTo="M 25.47 66L 25.47 12.75Q 25.47 8.75 29.47 8.75L 27.13 8.75Q 31.13 8.75 31.13 12.75L 31.13 12.75L 31.13 66Q 31.13 70 27.13 70L 29.47 70Q 25.47 70 25.47 66z"
                                          pathFrom="M 25.47 66L 25.47 66L 31.13 66L 31.13 66L 31.13 66L 31.13 66L 31.13 66L 25.47 66"
                                          cy="8.75"
                                          cx="31.13"
                                          j="1"
                                          val="70"
                                          barHeight="61.25"
                                          barWidth="5.66"
                                        ></path>
                                        <rect
                                          id="SvgjsRect2173"
                                          width="5.66"
                                          height="70"
                                          x="53.77"
                                          y="0"
                                          rx="4"
                                          ry="4"
                                          opacity="1"
                                          stroke-width="0"
                                          stroke="none"
                                          stroke-dasharray="0"
                                          fill="#F0F2F8"
                                          class="apexcharts-backgroundBar"
                                        ></rect>
                                        <path
                                          id="SvgjsPath2175"
                                          d="M 53.77 66L 53.77 30.25Q 53.77 26.25 57.77 26.25L 55.43000000000001 26.25Q 59.43000000000001 26.25 59.43000000000001 30.25L 59.43000000000001 30.25L 59.43000000000001 66Q 59.43000000000001 70 55.43000000000001 70L 57.77 70Q 53.77 70 53.77 66z"
                                          fill="rgba(255,76,81,0.85)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="round"
                                          stroke-width="0"
                                          stroke-dasharray="0"
                                          class="apexcharts-bar-area"
                                          index="0"
                                          clip-path="url(#gridRectMaskqh8yptw6)"
                                          pathTo="M 53.77 66L 53.77 30.25Q 53.77 26.25 57.77 26.25L 55.43000000000001 26.25Q 59.43000000000001 26.25 59.43000000000001 30.25L 59.43000000000001 30.25L 59.43000000000001 66Q 59.43000000000001 70 55.43000000000001 70L 57.77 70Q 53.77 70 53.77 66z"
                                          pathFrom="M 53.77 66L 53.77 66L 59.43000000000001 66L 59.43000000000001 66L 59.43000000000001 66L 59.43000000000001 66L 59.43000000000001 66L 53.77 66"
                                          cy="26.25"
                                          cx="59.43000000000001"
                                          j="2"
                                          val="50"
                                          barHeight="43.75"
                                          barWidth="5.66"
                                        ></path>
                                        <rect
                                          id="SvgjsRect2176"
                                          width="5.66"
                                          height="70"
                                          x="82.07"
                                          y="0"
                                          rx="4"
                                          ry="4"
                                          opacity="1"
                                          stroke-width="0"
                                          stroke="none"
                                          stroke-dasharray="0"
                                          fill="#F0F2F8"
                                          class="apexcharts-backgroundBar"
                                        ></rect>
                                        <path
                                          id="SvgjsPath2178"
                                          d="M 82.07 66L 82.07 39Q 82.07 35 86.07 35L 83.72999999999999 35Q 87.72999999999999 35 87.72999999999999 39L 87.72999999999999 39L 87.72999999999999 66Q 87.72999999999999 70 83.72999999999999 70L 86.07 70Q 82.07 70 82.07 66z"
                                          fill="rgba(144,85,253,0.85)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="round"
                                          stroke-width="0"
                                          stroke-dasharray="0"
                                          class="apexcharts-bar-area"
                                          index="0"
                                          clip-path="url(#gridRectMaskqh8yptw6)"
                                          pathTo="M 82.07 66L 82.07 39Q 82.07 35 86.07 35L 83.72999999999999 35Q 87.72999999999999 35 87.72999999999999 39L 87.72999999999999 39L 87.72999999999999 66Q 87.72999999999999 70 83.72999999999999 70L 86.07 70Q 82.07 70 82.07 66z"
                                          pathFrom="M 82.07 66L 82.07 66L 87.72999999999999 66L 87.72999999999999 66L 87.72999999999999 66L 87.72999999999999 66L 87.72999999999999 66L 82.07 66"
                                          cy="35"
                                          cx="87.72999999999999"
                                          j="3"
                                          val="40"
                                          barHeight="35"
                                          barWidth="5.66"
                                        ></path>
                                        <rect
                                          id="SvgjsRect2179"
                                          width="5.66"
                                          height="70"
                                          x="110.37"
                                          y="0"
                                          rx="4"
                                          ry="4"
                                          opacity="1"
                                          stroke-width="0"
                                          stroke="none"
                                          stroke-dasharray="0"
                                          fill="#F0F2F8"
                                          class="apexcharts-backgroundBar"
                                        ></rect>
                                        <path
                                          id="SvgjsPath2181"
                                          d="M 110.37 66L 110.37 21.5Q 110.37 17.5 114.37 17.5L 112.03 17.5Q 116.03 17.5 116.03 21.5L 116.03 21.5L 116.03 66Q 116.03 70 112.03 70L 114.37 70Q 110.37 70 110.37 66z"
                                          fill="rgba(144,85,253,0.85)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="round"
                                          stroke-width="0"
                                          stroke-dasharray="0"
                                          class="apexcharts-bar-area"
                                          index="0"
                                          clip-path="url(#gridRectMaskqh8yptw6)"
                                          pathTo="M 110.37 66L 110.37 21.5Q 110.37 17.5 114.37 17.5L 112.03 17.5Q 116.03 17.5 116.03 21.5L 116.03 21.5L 116.03 66Q 116.03 70 112.03 70L 114.37 70Q 110.37 70 110.37 66z"
                                          pathFrom="M 110.37 66L 110.37 66L 116.03 66L 116.03 66L 116.03 66L 116.03 66L 116.03 66L 110.37 66"
                                          cy="17.5"
                                          cx="116.03"
                                          j="4"
                                          val="60"
                                          barHeight="52.5"
                                          barWidth="5.66"
                                        ></path>
                                        <g
                                          id="SvgjsG2166"
                                          class="apexcharts-bar-goals-markers"
                                          style="pointer-events: none"
                                        >
                                          <g
                                            id="SvgjsG2168"
                                            className="apexcharts-bar-goals-groups"
                                          ></g>
                                          <g
                                            id="SvgjsG2171"
                                            className="apexcharts-bar-goals-groups"
                                          ></g>
                                          <g
                                            id="SvgjsG2174"
                                            className="apexcharts-bar-goals-groups"
                                          ></g>
                                          <g
                                            id="SvgjsG2177"
                                            className="apexcharts-bar-goals-groups"
                                          ></g>
                                          <g
                                            id="SvgjsG2180"
                                            className="apexcharts-bar-goals-groups"
                                          ></g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG2165"
                                        class="apexcharts-datalabels"
                                        dataRealIndex="0"
                                      ></g>
                                    </g>
                                    <line
                                      id="SvgjsLine2202"
                                      x1="-9.399999999999999"
                                      y1="0"
                                      x2="122.6"
                                      y2="0"
                                      stroke="#b6b6b6"
                                      stroke-dasharray="0"
                                      stroke-width="1"
                                      stroke-linecap="butt"
                                      class="apexcharts-ycrosshairs"
                                    ></line>
                                    <line
                                      id="SvgjsLine2203"
                                      x1="-9.399999999999999"
                                      y1="0"
                                      x2="122.6"
                                      y2="0"
                                      stroke-dasharray="0"
                                      stroke-width="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-ycrosshairs-hidden"
                                    ></line>
                                    <g
                                      id="SvgjsG2204"
                                      class="apexcharts-yaxis-annotations"
                                    ></g>
                                    <g
                                      id="SvgjsG2205"
                                      class="apexcharts-xaxis-annotations"
                                    ></g>
                                    <g
                                      id="SvgjsG2206"
                                      class="apexcharts-point-annotations"
                                    ></g>
                                    <rect
                                      id="SvgjsRect2207"
                                      width="0"
                                      height="0"
                                      x="0"
                                      y="0"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fefefe"
                                      class="apexcharts-zoom-rect"
                                    ></rect>
                                    <rect
                                      id="SvgjsRect2208"
                                      width="0"
                                      height="0"
                                      x="0"
                                      y="0"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fefefe"
                                      class="apexcharts-selection-rect"
                                    ></rect>
                                  </g>
                                  <g
                                    id="SvgjsG2190"
                                    class="apexcharts-yaxis"
                                    rel="0"
                                    transform="translate(-8, 0)"
                                  >
                                    <g
                                      id="SvgjsG2191"
                                      class="apexcharts-yaxis-texts-g"
                                    ></g>
                                  </g>
                                  <g
                                    id="SvgjsG2154"
                                    class="apexcharts-annotations"
                                  ></g>
                                </svg>
                                <div
                                  class="apexcharts-legend"
                                  style="max-height: 45px;"
                                ></div>
                              </div>
                            </div>
                            <h6 class="text-center mb-0">Sessions</h6>
                            <div class="resize-triggers">
                              <div class="expand-trigger">
                                <div style="width: 183px; height: 152px;"></div>
                              </div>
                              <div class="contract-trigger"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <div class="card h-100">
                      <div class="card-header pb-1">
                        <div class="d-flex justify-content-between">
                          <h5 class="mb-1">Performance</h5>
                          <div class="dropdown">
                            <button
                              class="btn p-0"
                              type="button"
                              id="performanceDropdown"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="mdi mdi-dots-vertical mdi-24px"></i>
                            </button>
                            <div
                              class="dropdown-menu dropdown-menu-end"
                              aria-labelledby="performanceDropdown"
                            >
                              <a
                                class="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Last 28 Days
                              </a>
                              <a
                                class="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Last Month
                              </a>
                              <a
                                class="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Last Year
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-body" style="position: relative;">
                        <div id="performanceChart" style="min-height: 325px;">
                          <div
                            id="apexcharts5t93jf1q"
                            class="apexcharts-canvas apexcharts5t93jf1q apexcharts-theme-light"
                            style="width: 348px; height: 310px;"
                          >
                            <svg
                              id="SvgjsSvg2211"
                              width="348"
                              height="310"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlnsSvgjs="http://svgjs.dev"
                              class="apexcharts-svg"
                              xmlnsData="ApexChartsNS"
                              transform="translate(0, 10)"
                              style="background: transparent;"
                            >
                              <foreignObject
                                x="0"
                                y="0"
                                width="348"
                                height="310"
                              >
                                <div
                                  class="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                                  xmlns="http://www.w3.org/1999/xhtml"
                                  style="inset: auto 0px -5px; position: absolute; max-height: 155px;"
                                >
                                  <div
                                    class="apexcharts-legend-series"
                                    rel="1"
                                    seriesname="Income"
                                    dataCollapsed="false"
                                    style="margin: 8px 10px;"
                                  >
                                    <span
                                      class="apexcharts-legend-marker"
                                      rel="1"
                                      dataCollapsed="false"
                                      style="background: rgb(144, 85, 253) !important; color: rgb(144, 85, 253); height: 10px; width: 10px; left: -2px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"
                                    ></span>
                                    <span
                                      class="apexcharts-legend-text"
                                      rel="1"
                                      i="0"
                                      dataDefaultText="Income"
                                      dataCollapsed="false"
                                      style="color: rgb(137, 134, 141); font-size: 12px; font-weight: 400; font-family: Inter;"
                                    >
                                      Income
                                    </span>
                                  </div>
                                  <div
                                    class="apexcharts-legend-series"
                                    rel="2"
                                    seriesname="NetxWorth"
                                    dataCollapsed="false"
                                    style="margin: 8px 10px;"
                                  >
                                    <span
                                      class="apexcharts-legend-marker"
                                      rel="2"
                                      dataCollapsed="false"
                                      style="background: rgb(22, 177, 255) !important; color: rgb(22, 177, 255); height: 10px; width: 10px; left: -2px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"
                                    ></span>
                                    <span
                                      class="apexcharts-legend-text"
                                      rel="2"
                                      i="1"
                                      dataDefaultText="Net%20Worth"
                                      dataCollapsed="false"
                                      style="color: rgb(137, 134, 141); font-size: 12px; font-weight: 400; font-family: Inter;"
                                    >
                                      Net Worth
                                    </span>
                                  </div>
                                </div>
                              </foreignObject>
                              <g
                                id="SvgjsG2213"
                                class="apexcharts-inner apexcharts-graphical"
                                transform="translate(12, 30)"
                              >
                                <defs id="SvgjsDefs2212">
                                  <clipPath id="gridRectMask5t93jf1q">
                                    <rect
                                      id="SvgjsRect2216"
                                      width="317.4569330215454"
                                      height="219"
                                      x="-2"
                                      y="0"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                  <clipPath id="forecastMask5t93jf1q"></clipPath>
                                  <clipPath id="nonForecastMask5t93jf1q"></clipPath>
                                  <clipPath id="gridRectMarkerMask5t93jf1q">
                                    <rect
                                      id="SvgjsRect2217"
                                      width="317.4569330215454"
                                      height="223"
                                      x="-2"
                                      y="-2"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g id="SvgjsG2272" class="apexcharts-grid">
                                  <g
                                    id="SvgjsG2273"
                                    class="apexcharts-gridlines-horizontal"
                                    style="display: none;"
                                  >
                                    <line
                                      id="SvgjsLine2275"
                                      x1="0"
                                      y1="0"
                                      x2="313.4569330215454"
                                      y2="0"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2276"
                                      x1="0"
                                      y1="54.75"
                                      x2="313.4569330215454"
                                      y2="54.75"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2277"
                                      x1="0"
                                      y1="109.5"
                                      x2="313.4569330215454"
                                      y2="109.5"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2278"
                                      x1="0"
                                      y1="164.25"
                                      x2="313.4569330215454"
                                      y2="164.25"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2279"
                                      x1="0"
                                      y1="219"
                                      x2="313.4569330215454"
                                      y2="219"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                  </g>
                                  <g
                                    id="SvgjsG2274"
                                    class="apexcharts-gridlines-vertical"
                                    style="display: none;"
                                  ></g>
                                  <line
                                    id="SvgjsLine2281"
                                    x1="0"
                                    y1="219"
                                    x2="313.4569330215454"
                                    y2="219"
                                    stroke="transparent"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2280"
                                    x1="0"
                                    y1="1"
                                    x2="0"
                                    y2="219"
                                    stroke="transparent"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                </g>
                                <g
                                  id="SvgjsG2218"
                                  class="apexcharts-radar-series apexcharts-plot-series"
                                  transform="translate(156.7284665107727, 109.5)"
                                >
                                  <polygon
                                    id="SvgjsPolygon2260"
                                    points="0,-112.09363773890904 97.07593788450528,-56.04681886945453 97.0759378845053,56.04681886945449 1.3727511466173791e-14,112.09363773890904 -97.07593788450527,56.04681886945457 -97.07593788450534,-56.04681886945444 "
                                    fill="none"
                                    stroke="#e7e7e8"
                                    stroke-width="1"
                                  ></polygon>
                                  <polygon
                                    id="SvgjsPolygon2261"
                                    points="0,-84.07022830418178 72.80695341337896,-42.0351141520909 72.80695341337898,42.03511415209087 1.0295633599630344e-14,84.07022830418178 -72.80695341337895,42.03511415209093 -72.806953413379,-42.035114152090834 "
                                    fill="none"
                                    stroke="#e7e7e8"
                                    stroke-width="1"
                                  ></polygon>
                                  <polygon
                                    id="SvgjsPolygon2262"
                                    points="0,-56.04681886945452 48.53796894225264,-28.023409434727267 48.53796894225265,28.023409434727245 6.863755733086896e-15,56.04681886945452 -48.53796894225263,28.023409434727284 -48.53796894225267,-28.02340943472722 "
                                    fill="none"
                                    stroke="#e7e7e8"
                                    stroke-width="1"
                                  ></polygon>
                                  <polygon
                                    id="SvgjsPolygon2263"
                                    points="0,-28.02340943472726 24.26898447112632,-14.011704717363633 24.268984471126323,14.011704717363623 3.431877866543448e-15,28.02340943472726 -24.268984471126316,14.011704717363642 -24.268984471126334,-14.01170471736361 "
                                    fill="none"
                                    stroke="#e7e7e8"
                                    stroke-width="1"
                                  ></polygon>
                                  <polygon
                                    id="SvgjsPolygon2264"
                                    points="0,0 0,0 0,0 0,0 0,0 0,0 "
                                    fill="none"
                                    stroke="#e7e7e8"
                                    stroke-width="1"
                                  ></polygon>
                                  <line
                                    id="SvgjsLine2254"
                                    x1="0"
                                    y1="-112.09363773890904"
                                    x2="0"
                                    y2="0"
                                    stroke="#e7e7e8"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2255"
                                    x1="97.07593788450528"
                                    y1="-56.04681886945453"
                                    x2="0"
                                    y2="0"
                                    stroke="#e7e7e8"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2256"
                                    x1="97.0759378845053"
                                    y1="56.04681886945449"
                                    x2="0"
                                    y2="0"
                                    stroke="#e7e7e8"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2257"
                                    x1="1.3727511466173791e-14"
                                    y1="112.09363773890904"
                                    x2="0"
                                    y2="0"
                                    stroke="#e7e7e8"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2258"
                                    x1="-97.07593788450527"
                                    y1="56.04681886945457"
                                    x2="0"
                                    y2="0"
                                    stroke="#e7e7e8"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2259"
                                    x1="-97.07593788450534"
                                    y1="-56.04681886945444"
                                    x2="0"
                                    y2="0"
                                    stroke="#e7e7e8"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <g id="SvgjsG2265" class="apexcharts-xaxis">
                                    <text
                                      id="SvgjsText2266"
                                      font-family="Inter"
                                      x="0"
                                      y="-122.09363773890904"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="400"
                                      fill="#b4b2b7"
                                      class="apexcharts-datalabel"
                                      cx="0"
                                      cy="-122.09363773890904"
                                      style="font-family: Inter;"
                                    >
                                      Jan
                                    </text>
                                    <text
                                      id="SvgjsText2267"
                                      font-family="Inter"
                                      x="107.07593788450528"
                                      y="-56.04681886945453"
                                      text-anchor="start"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="400"
                                      fill="#b4b2b7"
                                      class="apexcharts-datalabel"
                                      cx="107.07593788450528"
                                      cy="-56.04681886945453"
                                      style="font-family: Inter;"
                                    >
                                      Feb
                                    </text>
                                    <text
                                      id="SvgjsText2268"
                                      font-family="Inter"
                                      x="107.0759378845053"
                                      y="56.04681886945449"
                                      text-anchor="start"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="400"
                                      fill="#b4b2b7"
                                      class="apexcharts-datalabel"
                                      cx="107.0759378845053"
                                      cy="56.04681886945449"
                                      style="font-family: Inter;"
                                    >
                                      Mar
                                    </text>
                                    <text
                                      id="SvgjsText2269"
                                      font-family="Inter"
                                      x="1.3727511466173791e-14"
                                      y="122.09363773890904"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="400"
                                      fill="#b4b2b7"
                                      class="apexcharts-datalabel"
                                      cx="1.3727511466173791e-14"
                                      cy="122.09363773890904"
                                      style="font-family: Inter;"
                                    >
                                      Apr
                                    </text>
                                    <text
                                      id="SvgjsText2270"
                                      font-family="Inter"
                                      x="-107.07593788450527"
                                      y="56.04681886945457"
                                      text-anchor="end"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="400"
                                      fill="#b4b2b7"
                                      class="apexcharts-datalabel"
                                      cx="-107.07593788450527"
                                      cy="56.04681886945457"
                                      style="font-family: Inter;"
                                    >
                                      May
                                    </text>
                                    <text
                                      id="SvgjsText2271"
                                      font-family="Inter"
                                      x="-107.07593788450534"
                                      y="-56.04681886945444"
                                      text-anchor="end"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="400"
                                      fill="#b4b2b7"
                                      class="apexcharts-datalabel"
                                      cx="-107.07593788450534"
                                      cy="-56.04681886945444"
                                      style="font-family: Inter;"
                                    >
                                      Jun
                                    </text>
                                  </g>
                                  <g
                                    id="SvgjsG2220"
                                    class="apexcharts-series"
                                    dataLongestSeries="true"
                                    seriesName="Income"
                                    rel="1"
                                    dataRealIndex="0"
                                  >
                                    <path
                                      id="SvgjsPath2223"
                                      d="M 0 -65.38795534769694L 0 -65.38795534769694L 72.80695341337896 -42.0351141520909L 64.71729192300353 37.36454591296966L 1.0867613244054249e-14 88.74079654330298L -60.67246117781579 35.029261793409106L -72.806953413379 -42.035114152090834Z"
                                      fill="none"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="butt"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-radar"
                                      index="0"
                                      pathTo="M 0 -65.38795534769694L 0 -65.38795534769694L 72.80695341337896 -42.0351141520909L 64.71729192300353 37.36454591296966L 1.0867613244054249e-14 88.74079654330298L -60.67246117781579 35.029261793409106L -72.806953413379 -42.035114152090834Z"
                                      pathFrom="M 0 0"
                                    ></path>
                                    <path
                                      id="SvgjsPath2224"
                                      d="M 0 -65.38795534769694L 0 -65.38795534769694L 72.80695341337896 -42.0351141520909L 64.71729192300353 37.36454591296966L 1.0867613244054249e-14 88.74079654330298L -60.67246117781579 35.029261793409106L -72.806953413379 -42.035114152090834Z"
                                      fill="rgba(144,85,253,1)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="butt"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-radar"
                                      index="0"
                                      pathTo="M 0 -65.38795534769694L 0 -65.38795534769694L 72.80695341337896 -42.0351141520909L 64.71729192300353 37.36454591296966L 1.0867613244054249e-14 88.74079654330298L -60.67246117781579 35.029261793409106L -72.806953413379 -42.035114152090834Z"
                                      pathFrom="M 0 0"
                                    ></path>
                                    <g
                                      id="SvgjsG2221"
                                      class="apexcharts-series-markers-wrap"
                                    >
                                      <g
                                        id="SvgjsG2226"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2225"
                                          r="0"
                                          cx="0"
                                          cy="-65.38795534769694"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#9055fd"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="0"
                                          j="0"
                                          index="0"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2228"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2227"
                                          r="0"
                                          cx="72.80695341337896"
                                          cy="-42.0351141520909"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#9055fd"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="1"
                                          j="1"
                                          index="0"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2230"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2229"
                                          r="0"
                                          cx="64.71729192300353"
                                          cy="37.36454591296966"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#9055fd"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="2"
                                          j="2"
                                          index="0"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2232"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2231"
                                          r="0"
                                          cx="1.0867613244054249e-14"
                                          cy="88.74079654330298"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#9055fd"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="3"
                                          j="3"
                                          index="0"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2234"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2233"
                                          r="0"
                                          cx="-60.67246117781579"
                                          cy="35.029261793409106"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#9055fd"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="4"
                                          j="4"
                                          index="0"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2236"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2235"
                                          r="0"
                                          cx="-72.806953413379"
                                          cy="-42.035114152090834"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#9055fd"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="5"
                                          j="5"
                                          index="0"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g class="apexcharts-series-markers">
                                        <circle
                                          id="SvgjsCircle2287"
                                          r="0"
                                          cx="0"
                                          cy="0"
                                          class="apexcharts-marker wgv55cc3y"
                                          stroke="#ffffff"
                                          fill="#9055fd"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG2237"
                                    class="apexcharts-series"
                                    dataLongestSeries="true"
                                    seriesName="NetxWorth"
                                    rel="2"
                                    dataRealIndex="1"
                                  >
                                    <path
                                      id="SvgjsPath2240"
                                      d="M 0 -102.75250126066662L 0 -102.75250126066662L 63.09935962492844 -36.43043226514545L 76.85178415856669 44.37039827165147L 9.723653955206436e-15 79.39966006506057L -76.85178415856666 44.37039827165153L -63.099359624928475 -36.43043226514539Z"
                                      fill="none"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="butt"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-radar"
                                      index="1"
                                      pathTo="M 0 -102.75250126066662L 0 -102.75250126066662L 63.09935962492844 -36.43043226514545L 76.85178415856669 44.37039827165147L 9.723653955206436e-15 79.39966006506057L -76.85178415856666 44.37039827165153L -63.099359624928475 -36.43043226514539Z"
                                      pathFrom="M 0 0"
                                    ></path>
                                    <path
                                      id="SvgjsPath2241"
                                      d="M 0 -102.75250126066662L 0 -102.75250126066662L 63.09935962492844 -36.43043226514545L 76.85178415856669 44.37039827165147L 9.723653955206436e-15 79.39966006506057L -76.85178415856666 44.37039827165153L -63.099359624928475 -36.43043226514539Z"
                                      fill="rgba(22,177,255,0.9)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="butt"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-radar"
                                      index="1"
                                      pathTo="M 0 -102.75250126066662L 0 -102.75250126066662L 63.09935962492844 -36.43043226514545L 76.85178415856669 44.37039827165147L 9.723653955206436e-15 79.39966006506057L -76.85178415856666 44.37039827165153L -63.099359624928475 -36.43043226514539Z"
                                      pathFrom="M 0 0"
                                    ></path>
                                    <g
                                      id="SvgjsG2238"
                                      class="apexcharts-series-markers-wrap"
                                    >
                                      <g
                                        id="SvgjsG2243"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2242"
                                          r="0"
                                          cx="0"
                                          cy="-102.75250126066662"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#16b1ff"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="0"
                                          j="0"
                                          index="1"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2245"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2244"
                                          r="0"
                                          cx="63.09935962492844"
                                          cy="-36.43043226514545"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#16b1ff"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="1"
                                          j="1"
                                          index="1"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2247"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2246"
                                          r="0"
                                          cx="76.85178415856669"
                                          cy="44.37039827165147"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#16b1ff"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="2"
                                          j="2"
                                          index="1"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2249"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2248"
                                          r="0"
                                          cx="9.723653955206436e-15"
                                          cy="79.39966006506057"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#16b1ff"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="3"
                                          j="3"
                                          index="1"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2251"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2250"
                                          r="0"
                                          cx="-76.85178415856666"
                                          cy="44.37039827165153"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#16b1ff"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="4"
                                          j="4"
                                          index="1"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2253"
                                        class="apexcharts-series-markers"
                                      >
                                        <circle
                                          id="SvgjsCircle2252"
                                          r="0"
                                          cx="-63.099359624928475"
                                          cy="-36.43043226514539"
                                          class="apexcharts-marker"
                                          stroke="#ffffff"
                                          fill="#16b1ff"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          rel="5"
                                          j="5"
                                          index="1"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                      <g class="apexcharts-series-markers">
                                        <circle
                                          id="SvgjsCircle2288"
                                          r="0"
                                          cx="0"
                                          cy="0"
                                          class="apexcharts-marker wq0l6fwu6"
                                          stroke="#ffffff"
                                          fill="#16b1ff"
                                          fill-opacity="1"
                                          stroke-width="1"
                                          stroke-opacity="1"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG2219"
                                    class="apexcharts-yaxis"
                                  ></g>
                                  <g
                                    id="SvgjsG2222"
                                    class="apexcharts-datalabels"
                                    dataRealIndex="0"
                                  ></g>
                                  <g
                                    id="SvgjsG2239"
                                    class="apexcharts-datalabels"
                                    dataRealIndex="1"
                                  ></g>
                                </g>
                                <line
                                  id="SvgjsLine2282"
                                  x1="0"
                                  y1="0"
                                  x2="313.4569330215454"
                                  y2="0"
                                  stroke="#b6b6b6"
                                  stroke-dasharray="0"
                                  stroke-width="1"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs"
                                ></line>
                                <line
                                  id="SvgjsLine2283"
                                  x1="0"
                                  y1="0"
                                  x2="313.4569330215454"
                                  y2="0"
                                  stroke-dasharray="0"
                                  stroke-width="0"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs-hidden"
                                ></line>
                                <g
                                  id="SvgjsG2284"
                                  class="apexcharts-yaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2285"
                                  class="apexcharts-xaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2286"
                                  class="apexcharts-point-annotations"
                                ></g>
                              </g>
                              <g
                                id="SvgjsG2214"
                                class="apexcharts-annotations"
                              ></g>
                            </svg>
                            <div class="apexcharts-tooltip apexcharts-theme-light">
                              <div
                                class="apexcharts-tooltip-title"
                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                              ></div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 1;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(144, 85, 253);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 2;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(22, 177, 255);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                              <div class="apexcharts-yaxistooltip-text"></div>
                            </div>
                          </div>
                        </div>
                        <div class="resize-triggers">
                          <div class="expand-trigger">
                            <div style="width: 389px; height: 365px;"></div>
                          </div>
                          <div class="contract-trigger"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-8">
                    <div class="card">
                      <div class="card-body row g-2">
                        <div class="col-12 col-md-6 card-separator pe-0 pe-md-3">
                          <div class="d-flex justify-content-between align-items-center flex-wrap mb-4">
                            <h5 class="m-0 me-2">Deposit</h5>
                            <a class="fw-medium" href="javascript:void(0);">
                              View all
                            </a>
                          </div>
                          <div class="pt-2">
                            <ul class="p-0 m-0">
                              <li class="d-flex mb-4 align-items-center pb-2">
                                <div class="flex-shrink-0 me-3">
                                  <img
                                    src="../../assets/img/icons/payments/gumroad.png"
                                    class="img-fluid"
                                    alt="gumroad"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div class="me-2">
                                    <h6 class="mb-0">Gumroad Account</h6>
                                    <small>Sell UI Kit</small>
                                  </div>
                                  <h6 class="text-success mb-0">+$4,650</h6>
                                </div>
                              </li>
                              <li class="d-flex mb-4 align-items-center pb-2">
                                <div class="flex-shrink-0 me-3">
                                  <img
                                    src="../../assets/img/icons/payments/mastercard-2.png"
                                    class="img-fluid"
                                    alt="mastercard"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div class="me-2">
                                    <h6 class="mb-0">Mastercard</h6>
                                    <small>Wallet deposit</small>
                                  </div>
                                  <h6 class="text-success mb-0">+$92,705</h6>
                                </div>
                              </li>
                              <li class="d-flex mb-4 align-items-center pb-2">
                                <div class="flex-shrink-0 me-3">
                                  <img
                                    src="../../assets/img/icons/payments/stripes.png"
                                    class="img-fluid"
                                    alt="stripes"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div class="me-2">
                                    <h6 class="mb-0">Stripe Account</h6>
                                    <small>iOS Application</small>
                                  </div>
                                  <h6 class="text-success mb-0">+$957</h6>
                                </div>
                              </li>
                              <li class="d-flex mb-4 align-items-center pb-2">
                                <div class="flex-shrink-0 me-3">
                                  <img
                                    src="../../assets/img/icons/payments/american-bank.png"
                                    class="img-fluid"
                                    alt="american"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div class="me-2">
                                    <h6 class="mb-0">American Bank</h6>
                                    <small>Bank Transfer</small>
                                  </div>
                                  <h6 class="text-success mb-0">+$6,837</h6>
                                </div>
                              </li>
                              <li class="d-flex align-items-center">
                                <div class="flex-shrink-0 me-3">
                                  <img
                                    src="../../assets/img/icons/payments/citi.png"
                                    class="img-fluid"
                                    alt="citi"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div class="me-2">
                                    <h6 class="mb-0">Bank Account</h6>
                                    <small>Wallet deposit</small>
                                  </div>
                                  <h6 class="text-success mb-0">+$446</h6>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-12 col-md-6 ps-0 ps-md-3 mt-3 mt-md-2">
                          <div class="d-flex justify-content-between align-items-center flex-wrap mb-4">
                            <h5 class="m-0 me-2">Withdraw</h5>
                            <a class="fw-medium" href="javascript:void(0);">
                              View all
                            </a>
                          </div>
                          <div class="pt-2">
                            <ul class="p-0 m-0">
                              <li class="d-flex mb-4 align-items-center pb-2">
                                <div class="flex-shrink-0 me-3">
                                  <img
                                    src="../../assets/img/icons/brands/google.png"
                                    class="img-fluid"
                                    alt="google"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div class="me-2">
                                    <h6 class="mb-0">Google Adsense</h6>
                                    <small>Paypal deposit</small>
                                  </div>
                                  <h6 class="text-danger mb-0">-$145</h6>
                                </div>
                              </li>
                              <li class="d-flex mb-4 align-items-center pb-2">
                                <div class="flex-shrink-0 me-3">
                                  <img
                                    src="../../assets/img/icons/brands/github.png"
                                    class="img-fluid"
                                    alt="github"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div class="me-2">
                                    <h6 class="mb-0">Github Enterprise</h6>
                                    <small>Security &amp; compliance</small>
                                  </div>
                                  <h6 class="text-danger mb-0">-$1870</h6>
                                </div>
                              </li>
                              <li class="d-flex mb-4 align-items-center pb-2">
                                <div class="flex-shrink-0 me-3">
                                  <img
                                    src="../../assets/img/icons/brands/slack.png"
                                    class="img-fluid"
                                    alt="slack"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div class="me-2">
                                    <h6 class="mb-0">Upgrade Slack Plan</h6>
                                    <small>Debit card deposit</small>
                                  </div>
                                  <h6 class="text-danger mb-0">$450</h6>
                                </div>
                              </li>
                              <li class="d-flex mb-4 align-items-center pb-2">
                                <div class="flex-shrink-0 me-3">
                                  <img
                                    src="../../assets/img/icons/payments/digital-ocean.png"
                                    class="img-fluid"
                                    alt="digital"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div class="me-2">
                                    <h6 class="mb-0">Digital Ocean</h6>
                                    <small>Cloud Hosting</small>
                                  </div>
                                  <h6 class="text-danger mb-0">-$540</h6>
                                </div>
                              </li>
                              <li class="d-flex align-items-center">
                                <div class="flex-shrink-0 me-3">
                                  <img
                                    src="../../assets/img/icons/brands/aws.png"
                                    class="img-fluid"
                                    alt="aws"
                                    height="30"
                                    width="30"
                                  />
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div class="me-2">
                                    <h6 class="mb-0">AWS Account</h6>
                                    <small>Choosing a Cloud Platform</small>
                                  </div>
                                  <h6 class="text-danger mb-0">-$21</h6>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <div class="card h-100">
                      <div class="card-header d-flex align-items-center justify-content-between">
                        <h5 class="card-title m-0 me-2">Sales by Countries</h5>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="saleStatus"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical mdi-24px"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="saleStatus"
                          >
                            <a
                              class="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Last 28 Days
                            </a>
                            <a
                              class="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Last Month
                            </a>
                            <a
                              class="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Last Year
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
                          <div class="d-flex align-items-center">
                            <div class="avatar me-3">
                              <div class="avatar-initial bg-label-success rounded-circle">
                                US
                              </div>
                            </div>
                            <div>
                              <div class="d-flex align-items-center gap-1">
                                <h6 class="mb-0">$8,656k</h6>
                                <i class="mdi mdi-chevron-up mdi-24px text-success"></i>
                                <small class="text-success">25.8%</small>
                              </div>
                              <small>United states of america</small>
                            </div>
                          </div>
                          <div class="text-end">
                            <h6 class="mb-0">894k</h6>
                            <small>Sales</small>
                          </div>
                        </div>
                        <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
                          <div class="d-flex align-items-center">
                            <div class="avatar me-3">
                              <span class="avatar-initial bg-label-danger rounded-circle">
                                UK
                              </span>
                            </div>
                            <div>
                              <div class="d-flex align-items-center gap-1">
                                <h6 class="mb-0">$2,415k</h6>
                                <i class="mdi mdi-chevron-down mdi-24px text-danger"></i>
                                <small class="text-danger">6.2%</small>
                              </div>
                              <small>United Kingdom</small>
                            </div>
                          </div>
                          <div class="text-end">
                            <h6 class="mb-0">645k</h6>
                            <small>Sales</small>
                          </div>
                        </div>
                        <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
                          <div class="d-flex align-items-center">
                            <div class="avatar me-3">
                              <span class="avatar-initial bg-label-warning rounded-circle">
                                IN
                              </span>
                            </div>
                            <div>
                              <div class="d-flex align-items-center gap-1">
                                <h6 class="mb-0">865k</h6>
                                <i class="mdi mdi-chevron-up mdi-24px text-success"></i>
                                <small class="text-success"> 12.4%</small>
                              </div>
                              <small>India</small>
                            </div>
                          </div>
                          <div class="text-end">
                            <h6 class="mb-0">148k</h6>
                            <small>Sales</small>
                          </div>
                        </div>
                        <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
                          <div class="d-flex align-items-center">
                            <div class="avatar me-3">
                              <span class="avatar-initial bg-label-secondary rounded-circle">
                                JA
                              </span>
                            </div>
                            <div>
                              <div class="d-flex align-items-center gap-1">
                                <h6 class="mb-0">$745k</h6>
                                <i class="mdi mdi-chevron-down mdi-24px text-danger"></i>
                                <small class="text-danger">11.9%</small>
                              </div>
                              <small>Japan</small>
                            </div>
                          </div>
                          <div class="text-end">
                            <h6 class="mb-0">86k</h6>
                            <small>Sales</small>
                          </div>
                        </div>
                        <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
                          <div class="d-flex align-items-center">
                            <div class="avatar me-3">
                              <span class="avatar-initial bg-label-danger rounded-circle">
                                KO
                              </span>
                            </div>
                            <div>
                              <div class="d-flex align-items-center gap-1">
                                <h6 class="mb-0">$45k</h6>
                                <i class="mdi mdi-chevron-up mdi-24px text-success"></i>
                                <small class="text-success">16.2%</small>
                              </div>
                              <small>Korea</small>
                            </div>
                          </div>
                          <div class="text-end">
                            <h6 class="mb-0">42k</h6>
                            <small>Sales</small>
                          </div>
                        </div>
                        <div class="d-flex flex-wrap justify-content-between align-items-center">
                          <div class="d-flex align-items-center">
                            <div class="avatar me-3">
                              <span class="avatar-initial bg-label-primary rounded-circle">
                                CH
                              </span>
                            </div>
                            <div>
                              <div class="d-flex align-items-center gap-1">
                                <h6 class="mb-0">$12k</h6>
                                <i class="mdi mdi-chevron-up mdi-24px text-success"></i>
                                <small class="text-success">14.8%</small>
                              </div>
                              <small>China</small>
                            </div>
                          </div>
                          <div class="text-end">
                            <h6 class="mb-0">8k</h6>
                            <small>Sales</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-8 col-md-6">
                    <div class="card">
                      <div class="table-responsive">
                        <table class="table">
                          <thead class="table-light">
                            <tr>
                              <th class="text-truncate">User</th>
                              <th class="text-truncate">Email</th>
                              <th class="text-truncate">Role</th>
                              <th class="text-truncate">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-sm me-3">
                                    <img
                                      src="../../assets/img/avatars/1.png"
                                      alt="Avatar"
                                      class="rounded-circle"
                                    />
                                  </div>
                                  <div>
                                    <h6 class="mb-0 text-truncate">
                                      Jordan Stevenson
                                    </h6>
                                    <small class="text-truncate">
                                      @amiccoo
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td class="text-truncate">
                                susanna.Lind57@gmail.com
                              </td>
                              <td class="text-truncate">
                                <i class="mdi mdi-laptop mdi-24px text-danger me-1"></i>{" "}
                                Admin
                              </td>
                              <td>
                                <span class="badge bg-label-warning rounded-pill">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-sm me-3">
                                    <img
                                      src="../../assets/img/avatars/3.png"
                                      alt="Avatar"
                                      class="rounded-circle"
                                    />
                                  </div>
                                  <div>
                                    <h6 class="mb-0 text-truncate">
                                      Benedetto Rossiter
                                    </h6>
                                    <small class="text-truncate">
                                      @brossiter15
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td class="text-truncate">
                                estelle.Bailey10@gmail.com
                              </td>
                              <td class="text-truncate">
                                <i class="mdi mdi-pencil-outline text-info mdi-24px me-1"></i>{" "}
                                Editor
                              </td>
                              <td>
                                <span class="badge bg-label-success rounded-pill">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-sm me-3">
                                    <img
                                      src="../../assets/img/avatars/2.png"
                                      alt="Avatar"
                                      class="rounded-circle"
                                    />
                                  </div>
                                  <div>
                                    <h6 class="mb-0 text-truncate">
                                      Bentlee Emblin
                                    </h6>
                                    <small class="text-truncate">
                                      @bemblinf
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td class="text-truncate">milo86@hotmail.com</td>
                              <td class="text-truncate">
                                <i class="mdi mdi-cog-outline text-warning mdi-24px me-1"></i>{" "}
                                Author
                              </td>
                              <td>
                                <span class="badge bg-label-success rounded-pill">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-sm me-3">
                                    <img
                                      src="../../assets/img/avatars/5.png"
                                      alt="Avatar"
                                      class="rounded-circle"
                                    />
                                  </div>
                                  <div>
                                    <h6 class="mb-0 text-truncate">
                                      Bertha Biner
                                    </h6>
                                    <small class="text-truncate">
                                      @bbinerh
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td class="text-truncate">
                                lonnie35@hotmail.com
                              </td>
                              <td class="text-truncate">
                                <i class="mdi mdi-pencil-outline text-info mdi-24px me-1"></i>{" "}
                                Editor
                              </td>
                              <td>
                                <span class="badge bg-label-warning rounded-pill">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-sm me-3">
                                    <img
                                      src="../../assets/img/avatars/4.png"
                                      alt="Avatar"
                                      class="rounded-circle"
                                    />
                                  </div>
                                  <div>
                                    <h6 class="mb-0 text-truncate">
                                      Beverlie Krabbe
                                    </h6>
                                    <small class="text-truncate">
                                      @bkrabbe1d
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td class="text-truncate">
                                ahmad_Collins@yahoo.com
                              </td>
                              <td class="text-truncate">
                                <i class="mdi mdi-chart-donut mdi-24px text-success me-1"></i>{" "}
                                Maintainer
                              </td>
                              <td>
                                <span class="badge bg-label-success rounded-pill">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-sm me-3">
                                    <img
                                      src="../../assets/img/avatars/7.png"
                                      alt="Avatar"
                                      class="rounded-circle"
                                    />
                                  </div>
                                  <div>
                                    <h6 class="mb-0 text-truncate">
                                      Bradan Rosebotham
                                    </h6>
                                    <small class="text-truncate">
                                      @brosebothamz
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td class="text-truncate">
                                tillman.Gleason68@hotmail.com
                              </td>
                              <td class="text-truncate">
                                <i class="mdi mdi-pencil-outline text-info mdi-24px me-1"></i>{" "}
                                Editor
                              </td>
                              <td>
                                <span class="badge bg-label-warning rounded-pill">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-sm me-3">
                                    <img
                                      src="../../assets/img/avatars/6.png"
                                      alt="Avatar"
                                      class="rounded-circle"
                                    />
                                  </div>
                                  <div>
                                    <h6 class="mb-0 text-truncate">
                                      Bree Kilday
                                    </h6>
                                    <small class="text-truncate">
                                      @bkildayr
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td class="text-truncate">otho21@gmail.com</td>
                              <td class="text-truncate">
                                <i class="mdi mdi-account-outline mdi-24px text-primary me-1"></i>{" "}
                                Subscriber
                              </td>
                              <td>
                                <span class="badge bg-label-success rounded-pill">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr class="border-transparent">
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-sm me-3">
                                    <img
                                      src="../../assets/img/avatars/1.png"
                                      alt="Avatar"
                                      class="rounded-circle"
                                    />
                                  </div>
                                  <div>
                                    <h6 class="mb-0 text-truncate">
                                      Breena Gallemore
                                    </h6>
                                    <small class="text-truncate">
                                      @bgallemore6
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td class="text-truncate">
                                florencio.Little@hotmail.com
                              </td>
                              <td class="text-truncate">
                                <i class="mdi mdi-account-outline mdi-24px text-primary me-1"></i>{" "}
                                Subscriber
                              </td>
                              <td>
                                <span class="badge bg-label-secondary rounded-pill">
                                  Inactive
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer class="content-footer footer bg-footer-theme">
                <div class="container-xxl">
                  <div class="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
                    <div class="text-body mb-2 mb-md-0">
                      ©
                      <script>document.write(new Date().getFullYear());</script>
                      2023 , made with{" "}
                      <span class="text-danger">
                        <i class="tf-icons mdi mdi-heart"></i>
                      </span>{" "}
                      by
                      <a
                        href="https://themeselection.com"
                        target="_blank"
                        class="footer-link fw-medium"
                      >
                        ThemeSelection
                      </a>
                    </div>
                    <div class="d-none d-lg-inline-block">
                      <a
                        href="https://themeselection.com/license/"
                        class="footer-link me-3"
                        target="_blank"
                      >
                        License
                      </a>
                      <a
                        href="https://themeselection.com/"
                        target="_blank"
                        class="footer-link me-3"
                      >
                        More Themes
                      </a>

                      <a
                        href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/"
                        target="_blank"
                        class="footer-link me-3"
                      >
                        Documentation
                      </a>

                      <a
                        href="https://themeselection.com/support/"
                        target="_blank"
                        class="footer-link d-none d-sm-inline-block"
                      >
                        Support
                      </a>
                    </div>
                  </div>
                </div>
              </footer>

              <div class="content-backdrop fade"></div>
            </div>
          </div>
        </div>

        <div class="layout-overlay layout-menu-toggle"></div>

        <div
          class="drag-target"
          style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
        ></div>
      </div>
    </>
  );
}

export default Wrapper;
