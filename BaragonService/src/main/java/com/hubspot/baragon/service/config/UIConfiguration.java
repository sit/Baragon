package com.hubspot.baragon.service.config;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Optional;
import com.google.common.base.Strings;
import org.hibernate.validator.constraints.NotEmpty;

import java.util.Locale;

import javax.validation.Valid;
import javax.validation.constraints.Pattern;

import static com.google.common.base.Preconditions.checkNotNull;

public class UIConfiguration {

  @NotEmpty
  @JsonProperty
  private String title = "Baragon";

  @JsonProperty
  @Pattern( regexp = "^|#[0-9a-fA-F]{6}$" )
  private String navColor = "";

  @JsonProperty
  private String baseUrl;

  private boolean allowEdit = false;

  private boolean authEnabled = false;

  public boolean allowEdit() {
    return allowEdit;
  }

  public void setAllowEdit(boolean allowEdit) {
    this.allowEdit = allowEdit;
  }

  public boolean authEnabled() {
    return authEnabled;
  }

  public void setAuthEnabled(boolean authEnabled) {
    this.authEnabled = authEnabled;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Optional<String> getBaseUrl() {
    return Optional.fromNullable(Strings.emptyToNull(baseUrl));
  }

  public void setBaseUrl(String baseUrl) {
    this.baseUrl = baseUrl;
  }

  public String getNavColor() {
    return navColor;
  }

  public void setNavColor(String navColor) {
    this.navColor = navColor;
  }

}
